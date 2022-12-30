<?php

namespace App\Http\Controllers;

use App\Models\bannerModel;
use Illuminate\Http\Request;

class bannerController extends Controller
{
    function getBannerDetails(){
        return bannerModel::all();
    }

    function getHomeTopBanner(){
        return bannerModel::where(["banner_name"=>"home top"])->get();
    }
    function getVideoBanner()
    {return bannerModel::where(["banner_name"=>"video banner"])->get();}

    function getPrivacyBanner()
    {return bannerModel::where(["banner_name"=>"privacy banner"])->get();}

    function getFooterAddress()
    {return bannerModel::where(["banner_name"=>"address info"])->first();}

    function getFooterEmail()
    {return bannerModel::where(["banner_name"=>"email info"])->first();}

    function getFooterPhone()
    {return bannerModel::where(["banner_name"=>"phone info"])->first();}}
