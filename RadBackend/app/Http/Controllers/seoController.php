<?php

namespace App\Http\Controllers;

use App\Models\seoModel;
use Illuminate\Http\Request;

class seoController extends Controller
{
    function setSeoData(){
        $result = seoModel::all();
        return $result;
    }

    function setHomeSeoData(){
        $result = seoModel::where(['id'=>1, 'page_name'=>"Home Page"])->first();
        return $result;
    }

    function setAboutSeoData(){
        $result = seoModel::where(['id'=>2, 'page_name'=>"About Page"])->first();
        return $result;
    }

    function setScheduleSeoData(){
        $result = seoModel::where(['id'=>3, 'page_name'=>"Schedule Page"])->first();
        return $result;
    }

    function setContactSeoData(){
        $result = seoModel::where(['id'=>4, 'page_name'=>"Contact Page"])->first();
        return $result;
    }

    function setPolicySeoData(){
        $result = seoModel::where(['id'=>5, 'page_name'=>"Policy Page"])->first();
        return $result;
    }

    function setTrainingSeoData(){
        $result = seoModel::where(['id'=>6, 'page_name'=>"Training Page"])->first();
        return $result;
    }

    function setCourseSeoData(){
        $result = seoModel::where(['id'=>7, 'page_name'=>"Course Page"])->first();
        return $result;
    }


    function upDateSEO(Request $request){
        $id = $request->input("id");
        $pageTitle=$request->input("pageTitle");
        $pageDescription=$request->input("pageDescription");
        $SeoTitle=$request->input("SeoTitle");
        $SeoDescription=$request->input("SeoDescription");

        return seoModel::where("id", $id)->update(["title"=>$pageTitle,"description"=>$pageDescription, "seo_title"=>$SeoTitle, "seo_description"=>$SeoDescription]);

    }
}
