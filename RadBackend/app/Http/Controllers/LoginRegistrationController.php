<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\aboutModel;
use App\Models\ProfileModel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
class LoginRegistrationController extends Controller
{
    public function getRegistration(Request $request){

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        if (User::where('email', $email)->count()==0){
            $validation = Validator::make($request->all(),[
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
                'password' => ['required', Rules\Password::defaults()],
            ]);

            if (!$validation->fails()){
                $user = User::insert([
                    'name' => $name,
                    'email' => $email,
                    'password' => Hash::make($password),
                    'created_at'=>Carbon::today()
                ]);

                ProfileModel::insert(["email"=>$email]);
                aboutModel::insert(["email"=>$email]);
                if ($user){
                    $newUser = User::where('email', $email)->first();
                    event(new Registered($newUser));
                    return response()->json([
                        'status'=>true,
                        'message'=>"user Created"
                    ]);
                }}

            else{return response()->json([
                'status'=>false,
                'message'=>"Use a hard password"
            ]);
            }
        }

        else{
            return response()->json([
                'status'=>false,
                'message'=>"Email Already exist"
            ]);
        }
    }

    public function allUser(){
        $data = User::get();
        $result = array();

        foreach ($data as  $item){
            $name = $item->name;
            $email = $item->email;
            $created_at = $item->created_at;
            $newData = [
                "name"=>$name,
                "email"=>$email,
                "created_at"=>explode(" ",$created_at)[0]
            ];
            array_push($result, $newData);
        }

        return $result;
    }

    function Login(LoginRequest $request){
        $credentialWrong = $request->authenticate();
        $request->session()->regenerate();
        if(!$credentialWrong){
            return true;
        }
        else{return $credentialWrong;}

    }

    public function Logout(Request $request){
        return "hello";
        Auth::logout();
        $result = $request->session()->invalidate();
        if ($result){
            $request->session()->regenerateToken();
            return response()->json([
                'status'=>1,
                "message"=>"You are Logged out"
            ]);
        }
    }

    public function setPasswordChange(Request $request){
        $user = Auth::user();
        $newPass = $request->input('newPass');
        $oldPass = $request->input('oldPass');
        if ($request->has('oldPass') && $request->has('newPass')){
            if (Hash::check($oldPass, $user->password)){
                User::where("email",$user->email)->update(["password"=> Hash::make($newPass)]);
                return "New Password have set!";
            }
        }
        else {return "Same Password is not accepted!";}
        return response()->json(["messege"=>"Wrong Password input !"], 206);
    }
}
