<?php

namespace App\Http\Controllers;

use App\Models\aboutModel;
use App\Models\ProfileModel;
use App\Models\User;
use App\Models\UserModel;
use Illuminate\Http\Request;

class aboutController extends Controller
{
    function getAboutData(){
        return aboutModel::get();
    }
    function getUserAboutData(){
        $users = UserModel::all();
        $allUsers = array();
        foreach ($users as $item){
            $aboutData = aboutModel::where("email",$item->email)->first();
            $profileData = ProfileModel::where("email", $item->email)->first();
            $id = $profileData->id;
            $name = $item->name;
            $thumbnail = $profileData->profile_photo;
            $designation = $aboutData->designation;
            $shortDescription = $aboutData->details;
            $LDprofile = $profileData->ld_link;
            $info = [
                "id"=>$id,
                "name"=>$name,
                "thumbnail"=>$thumbnail,
                "designation"=>$designation,
                "short_description"=>$shortDescription,
                "linkedin"=>$LDprofile,
            ];
            array_push($allUsers, $info);
        }
        return $allUsers;
    }

    function getUserAboutDataByID($id){
        $profileData = ProfileModel::where("id", $id)->first();
        $userName = UserModel::where("email",$profileData->email)->pluck("name")->first();
        $aboutData = aboutModel::where('email',$profileData->email)->first();

        return  [
            "id"=>$id,
            "name"=>$userName,
            "thumbnail"=>$profileData->profile_photo,
            "designation"=>$aboutData->designation,
            "short_description"=>$aboutData->details,
            "linkedin"=>$profileData->ld_link,
            "facebook"=>$profileData->fb_link,
            "twitter"=>$profileData->tw_link,
            "bio"=>$profileData->bio,
            "education"=>$profileData->education
        ];
    }

}

