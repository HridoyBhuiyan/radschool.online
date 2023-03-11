<?php

namespace App\Http\Controllers;

use App\Models\aboutModel;
use App\Models\imageModel;
use App\Models\ProfileModel;
use App\Models\User;
use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function getMyProfile(){
        return Auth::id();
    }

    public function getUserInfo(){
        $email= Auth::user()->email;
        $id= Auth::user()->id;
        $name= Auth::user()->name;
        $profile = ProfileModel::where("email",$email)->first();
        $about = aboutModel::where("email", $email)->first();
        return response()->json([
            "user_Id"=>$id,
            "email"=>$email,
            "name"=>$name,
            "fb_link"=>$profile->fb_link,
            "tw_link"=>$profile->tw_link,
            "ld_link"=>$profile->ld_link,
            "bio"=>$profile->bio,
            "education"=>$profile->education,
            "thumbnail"=>$profile->profile_photo,
            "designation"=>$about->designation,
            "shortDetails"=>$about->details
        ],200);
    }


    public function updateProfileData(Request $request){
        $photo = $request->file("photo");
        $name = $request->input("name");
        $designation = $request->input("designation");
        $shortDetails = $request->input("shortDetails");
        $fb = $request->input("fb");
        $tw = $request->input("tw");
        $ld = $request->input("ld");
        $bio = $request->input("bio");
        $education = $request->input("education");
        $user = Auth::user();



        if (!$request->hasFile("photo")){
            User::where('email',$user->email)->update(["name"=>$name]);
            ProfileModel::where("email",$user->email)->update(["fb_link"=>$fb,"tw_link"=>$tw,"ld_link"=>$ld, "bio"=>$bio,"education"=>$education]);
            aboutModel::where("email", $user->email)->update(["designation"=> $designation, "details"=>$shortDetails]);
        }

        else{
            $photoPath= $photo->store("/public");
            $imagePathOnPublic = "storage/".explode('/', $photoPath)[1];
            aboutModel::where("email", $user->email)->update(["designation"=> $designation, "details"=>$shortDetails]);
            return ProfileModel::where("email",$user->email)->update(["fb_link"=>$fb,"tw_link"=>$tw,"ld_link"=>$ld, "profile_photo"=>$imagePathOnPublic,"bio"=>$bio,"education"=>$education]);
        }
    }

    public function updateProfileEachData(Request $request){
        $id = $request->input('id');
        $email = ProfileModel::where('id', $id)->pluck('email')->first();
        if ($request->hasFile('photo')){
            $image = $request->file('photo')->store('/public');
            $imageName = explode('/', $image)[1];
            ProfileModel::where('id',$id)->update(['profile_photo'=>"storage/".$imageName]);
            imageModel::insert(['image_path',$imageName]);
        }

        if($request->has("name")){
            $name = $request->input('name');
            $user = UserModel::where('email',$email)->first();
            $user->name=$name;
            $user->save();
        }
        if($request->has("fb")){
            $fbID=$request->input("fb");
            ProfileModel::where('email', $email)->update(['fb_link'=>$fbID]);
        }
        if($request->has("ld")){
            $ldID=$request->input('ld');
            ProfileModel::where('email', $email)->update(["ld_link"=>$ldID]);
        }
        if($request->has("designation")){
            $designation=$request->input('designation');
             aboutModel::where('email', $email)->update(["designation"=>$designation]);

        }
        if($request->has("education")){
            $education=$request->input('education');
            ProfileModel::where('email', $email)->update(["education"=>$education]);
        }
        if($request->has("cover")){
            $cover=$request->input('cover');
            aboutModel::where('email', $email)->update(["details"=>$cover]);

        }
        if($request->has("tw")){
            $twID=$request->input('tw');
            ProfileModel::where('email', $email)->update(["tw_link"=> $twID]);
        }
        if($request->has("bio")){
            $bio=$request->input('bio');
            ProfileModel::where('email', $email)->update(["bio"=>$bio]);
        }

    }

}
