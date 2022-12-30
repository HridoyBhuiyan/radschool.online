<?php

namespace App\Http\Controllers;

use App\Models\eventModel;
use App\Models\imageModel;
use Illuminate\Http\Request;

class eventController extends Controller
{
    function getEventData(){
        return eventModel::orderBy("id","desc")->get();
    }

    function addEventData(Request $request){
        $title = $request->input("title");
        $detail = $request->input("detail");
        $month = $request->input("month");
        $date = $request->input("date");
        $topic = $request->input("eTopic");
        $speaker = $request->input("eSpeaker");
        $outcome = $request->input("eOutCome");
        $join_link = $request->input("eJoin");


        $image = $request->file("image")->store("public");
        $imageName = explode("/", $image)[1];
        $imagePath = "storage/".($imageName);
        $updated_at = time();

        if ($join_link==""){
            $join_link="/";
        }
        $result = eventModel::insert([
            "title"=>$title,
            "detail"=>$detail,
            "month"=>$month,
            "day"=>$date,
            "image"=>$imagePath,
            "updated_at"=>$updated_at,
            "topic"=>$topic,
            "speaker"=>$speaker,
            "outcome"=>$outcome,
            "join_link"=>$join_link
        ]);

        if ($result){
            imageModel::insert(["image_path"=>$imageName, "title"=>"Event Thumbnail"]);
            return $result;
        }
    }

    function getSingleEvent($id){
        return eventModel::where("id",$id)->get()->first();
    }

    function updateEventData(Request $request){
        $detail = $request->input("details");
        $image = $request->file("image");
        $id = $request->input("id");
        $title = $request->input("title");
        $month = $request->input("month");
        $day = $request->input("day");

        $topic = $request->input("topic");
        $speaker = $request->input("speaker");
        $outCome = $request->input("outcome");
        $jLink = $request->input("jLink");

        //return $jLink;





        if ($image==null){
            return eventModel::where("id", $id)->update([
                "title"=>$title,
                "detail"=>$detail,
                "month"=>$month,
                "day"=>$day,
                "topic"=>$topic,
                "speaker"=>$speaker,
                "outcome"=>$outCome,
                "join_Link"=>$jLink
            ]);
        }

        else{
            $image = $image->store("public");
            $imageName = explode("/", $image)[1];
            $imagePath = "storage/".($imageName);
            $result = eventModel::where("id",$id)->update([
                "title"=>$title,
                "detail"=>$detail,
                "month"=>$month,
                "day"=>$day,
                "image"=>$imagePath,
                "topic"=>$topic,
                "speaker"=>$speaker,
                "outcome"=>$outCome,
                "join_Link"=>$jLink
            ]);

            if ($result){
                imageModel::insert(["image_path"=>$imageName, "title"=>"Event Thumbnail"]);

            }
            return $result;
        }

    }

    function deleteEventData(Request $request){
        $id = $request->input("id");
        return eventModel::where("id",$id)->delete();
    }
}
