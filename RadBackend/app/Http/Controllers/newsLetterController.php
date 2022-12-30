<?php

namespace App\Http\Controllers;

use App\Models\bannerModel;
use App\Models\newsLetterModel;
use Illuminate\Http\Request;

class newsLetterController extends Controller
{
    function getSubscriber(Request $request){
        $emailId= $request->input('email');
        $result = newsLetterModel::insert(['email_id'=>$emailId]);
        return $result;
    }

    function allSubscriber(){
        return newsLetterModel::orderBy("id", "DESC")->get();
    }

    function getNewsLetterBanner(){
        return bannerModel::where(["id"=>"6","banner_name"=>"newsletter"])->first();
    }
}
