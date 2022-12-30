<?php

namespace App\Http\Controllers;

use App\Models\bannerModel;
use App\Models\imageModel;
use Illuminate\Http\Request;

class allBannerController extends Controller
{
    function updateHomeTop(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $detail = $request->input("detail");
        $url = "URL have deleted";
        $image = $request->file("backgroundImage");

        if($image==null){
            return bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail, "additional_url"=>$url ]);
        }

        else{
            $image = $image->store("public");
            $imageName = explode("/", $image)[1];
            $imagePath = "storage/".$imageName;
            $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail, "additional_url"=>$url, "background_image"=>$imagePath ]);
            if ($result){
                imageModel::insert(["image_path"=>$imageName, "title"=>"From Home Top"]);
            }
            return "success";
        }
    }

    function updateVideoSection(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $detail = $request->input("detail");
        $url = $request->input("myURL");
        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail, "additional_url"=>$url ]);
        return $result;
    }

    function updatePrivacySection(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $detail = $request->input("detail");
        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail]);
        return $result;
    }

    function updateNewsletter(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $detail = $request->input("details");
        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail]);
        return $result;
    }

    function updateFooterAddress(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $detail = $request->input("details");
        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$detail]);
        return $result;
    }

    function updateFooterEmail(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $email = $request->input("email");

        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$email]);
        return $result;
    }

    function updateFooterPhone(Request $request){
        $id = $request->input("id");
        $title = $request->input("title");
        $number = $request->input("pNumber");

        $result = bannerModel::where("id",$id)->update(["title"=>$title, "details"=>$number]);
        return $result;

    }
}
