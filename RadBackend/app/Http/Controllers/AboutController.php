<?php

namespace App\Http\Controllers;

use App\Models\aboutModel;
use App\Models\ProfileModel;
use App\Models\UserModel;
use Illuminate\Http\Request;

class AboutController extends Controller
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
            $ldProfile = $profileData->ld_link;
            $fbProfile = $profileData->fb_link;
            $twProfile = $profileData->tw_link;
            $bio = $profileData->bio;
            $education = $profileData->education;
            $info = [
                "id"=>$id,
                "name"=>$name,
                "thumbnail"=>$thumbnail,
                "designation"=>$designation,
                "short_description"=>$shortDescription,
                "linkedin"=>$ldProfile,
                "facebook"=>$fbProfile,
                "twitter"=>$twProfile,
                "bio"=>$bio,
                "education"=>$education,

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
