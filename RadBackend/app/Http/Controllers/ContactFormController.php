<?php

namespace App\Http\Controllers;

use App\Models\contactFormModel;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    function getContactMessege(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $msg = $request->input('msg');
        date_default_timezone_set("Asia/Dhaka");
        $visit_time=date("h:i:sa");
        $visit_date = date("d-m-y");
        $result = contactFormModel::insert(["name"=>$name, "email"=>$email, "messege"=>$msg,"visit_time"=>$visit_time, "send_date"=>$visit_date, "watched"=>false, "note"=>" ", "updated_at"=>" "]);
        return $result;
    }

    function getAllContactMessgage(){
        return contactFormModel::orderBy("id","desc")->get();
    }

    function deleteContactMessage(Request $request){
        $id=$request->input("id");
        return contactFormModel::where("id",$id)->delete();
    }

    function getContactNote(Request $request){
        $id=$request->input("id");
        $note = $request->input("note");
        return contactFormModel::where("id", $id)->update(["note"=> $note]);
    }

    function setWatched(Request $request){
        $id=$request->input("id");
        return contactFormModel::where("id", $id)->update(["watched"=> true]);
    }


}
