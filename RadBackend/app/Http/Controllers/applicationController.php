<?php

namespace App\Http\Controllers;

use App\Models\applicationModel;
use Illuminate\Http\Request;

class applicationController extends Controller
{
    function getApplication(Request $request){

        //all input data
        $firstName = $request->input("firstName");
        $lastName = $request->input("lastName");
        $email = $request->input("email");
        $courseName = $request->input("courseName");
        $courseId = $request->input("courseId");
        $coverLetter = $request->input("coverLetter");
        $jobTitle = $request->input("jobTitle");
        $phoneNumber = $request->input("phoneNumber");
        $courseFee = $request->input("courseFee");

        //all time zone data

        date_default_timezone_set("Asia/Dhaka");
        $visit_time=date("h:i:sa");
        $visit_date = date("d-m-y");



        // all location data

        $countryName = "egypt";

        $postData = applicationModel::insert([
            "first_name"=>$firstName,
            "last_name"=>$lastName,
            "email"=>$email,
            "subject_name"=>$courseName,
            "course_id"=>$courseId,
            "cover_letter"=>$coverLetter,
            "date"=>$visit_date,
            "watched"=>false,
            "take_note"=>"Empty Note!" ,
            "location"=>$countryName,
            "job_title"=>$jobTitle,
            "phone_number"=>$phoneNumber,
            "updated_at"=>$visit_time]);

        return $postData;
    }

    function getApplicationData(){
        return applicationModel::orderBy("id", "desc")->get();
    }

    function setNote(Request $request){
        $id = $request->input('id');
        $note = $request->input("note");
        $result = applicationModel::where("id", $id)->update(["take_note"=>$note]);
        return $result;
    }

    function deleteApplication(Request $request){
        $id = $request->input("id");
        return applicationModel::where("id",$id)->delete();
    }

    function watchedApplication(Request $request){
        $id=$request->input("id");
        return applicationModel::where("id",$id)->update(["watched"=> true]);
    }

}
