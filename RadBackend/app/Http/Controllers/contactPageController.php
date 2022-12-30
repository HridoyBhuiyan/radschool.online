<?php

namespace App\Http\Controllers;

use App\Models\aboutModel;
use App\Models\contactPageModel;
use Illuminate\Http\Request;

class contactPageController extends Controller
{
    function getContactPageData(){
        return contactPageModel::first();
    }
    function contactUpdate(Request $request){
        $text = $request->input("text");
        return contactPageModel::where("id",0)->update(["details"=>$text]);
    }
    function companyAbout(){
        $result = aboutModel::where("id",1)->get();
        $result = $result[0];
        return $result;
    }
    function updateRadAbout(Request $request){
        $companyMotto=$request->input("motto");
        $companyAbout = $request->input("about");

        $result = aboutModel::where("id", "1")->update(["designation"=> $companyMotto, "details"=> $companyAbout]);
        return $result;
    }
}
