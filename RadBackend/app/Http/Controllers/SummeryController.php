<?php

namespace App\Http\Controllers;

use App\Models\applicationModel;
use App\Models\contactFormModel;
use App\Models\courseModel;
use App\Models\newsLetterModel;
use App\Models\ProfileModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SummeryController extends Controller
{
    function totalSummery(){
        $totalSub = newsLetterModel::all()->count();
        $totalApplication = applicationModel::all()->count();
        $totalCourse = courseModel::all()->count();
        $totalMessege = contactFormModel::all()->count();
        $result = json_encode(["sub"=>$totalSub, "application"=>$totalApplication, "course"=>$totalCourse, "messege"=>$totalMessege]);
        return $result;
    }


    public function getToolbarSummery(){
        $unreadMessage = contactFormModel::where("watched", false)->count();
        $unreadApplication = applicationModel::where(["watched"=> false])->count();
        $user = Auth::user();
        $thumbnail = ProfileModel::where("email", $user->email)->pluck('profile_photo')->first();
        $allUnReadMessage = contactFormModel::where("watched", false)->get();
        $allUnReadApplicatiton = applicationModel::where('watched', false)->get();

        return response()->json([
            'unreadMessage'=>$unreadMessage,
            "unreadApplication"=>$unreadApplication,
            "thumbnail"=>$thumbnail,
            "allUnreadMessage"=>$allUnReadMessage,
            "allUnreadApplication"=>$allUnReadApplicatiton
        ],200);

    }


}
