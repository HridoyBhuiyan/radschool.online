<?php

namespace App\Http\Controllers;

use App\Models\aboutModel;
use App\Models\contactPageModel;
use App\Models\imageModel;
use Illuminate\Http\Request;

class OtherPageController extends Controller
{
    function companyAbout(){
        $result = aboutModel::where("id",1)->get();
        $result = $result[0];
        return $result;
    }

    function updateRadAbout(Request $request){
        $companyMotto=$request->input("motto");
        $companyAbout = $request->input("about");
        $fbLink = "https://www.facebook.com/RadSchool.online";
        $twLink="https://twitter.com/Radschool2";
        $rdLink="https://www.linkedin.com/groups/13400411/";
        $result = aboutModel::where("id", "1")->update(["designation"=> $companyMotto, "details"=> $companyAbout,"facebook_link"=>$fbLink, "twitter_link"=>$twLink, "reddit_link"=>$rdLink]);
        return $result;
    }


    function contactUpdate(Request $request){
        $id=$request->input("id");
        $title=$request->input("title");
        $line1=$request->input("line1");
        $line2=$request->input("line2");
        return contactPageModel::where("id", $id)->update(["title"=>$title, "line_1"=>$line1, "line_2"=>$line2, "updated_at"=>time()]);
    }
}
