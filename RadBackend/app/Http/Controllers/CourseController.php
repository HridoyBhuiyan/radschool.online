<?php

namespace App\Http\Controllers;

use App\Models\courseModel;
use App\Models\imageModel;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function getCourseData(){
        return courseModel::orderBy("id","desc")->get();
    }

    function getNewCourse(Request $request){
        $details = $request->input("details");
        $title = $request->input("title");
        $description = $request->input("description");
        $thumbnail = $request->file('thumbnail')->store('public');
        $startDate = $request->input('startDate');
        $endDate = $request->input('endDate');
        $prerequisite= $request->input("prerequisite");
        $teacher = $request->input("teacher");
        $duration = $request->input("cDuration");
        $cId = $request->input("cId");
        $location = $request->input("cLocation");
        $price = $request->input("cPrice");
        $category = $request->input("category");
        $thumbnailPath = explode('/',$thumbnail)[1];
        $updatedAt = Carbon::now();

        $postData = courseModel::insert([
            "course_name"=>$title,
            "course_id"=>$cId,
            "description"=>$description,
            "detail"=>$details,
            "location"=>$location,
            "price"=>$price,
            "image"=>"storage/".$thumbnailPath,
            "course_start"=>$startDate,
            "course_end"=>$endDate,
            "course_duration"=>$duration,
            "course_teacher"=>$teacher,
            "prerequisites"=>$prerequisite,
            "category"=>$category,
            "updated_at"=>$updatedAt
        ]);

        if ($postData){
            return imageModel::insert(["image_path"=> $thumbnailPath, "title"=>"From Course System"]);
        }

    }


    function getSingleCourse($courseID){
        return courseModel::where("id",$courseID)->first();

    }

    function deleteCourse(Request $request){
        $id=$request->input("id");
        return courseModel::where("id",$id)->delete();
    }

    function getUpdateCourse(Request $request){
        $id = $request->input("id");
        $courseName = $request->input("uTitle");
        $courseID = $request->input("uId");
        $description = $request->input("uDescription");
        $details = $request->input("details");
        $location = $request->input("uLocation");
        $price = $request->input("uPrice");
        $image = $request->file("uFormFile");
        $startDate = $request->input("uStart");
        $endDate = $request->input("uEnd");
        $duration = $request->input("uDuration");
        $prerequisites = $request->input("uPrerequisite");
        $category = $request->input("uCategory");

        $teacher = $request->input("uTeacher");

        $update = time();

        if ($image==NULL){
            $result = courseModel::where("id",$id)->update([
                "course_name"=>$courseName,
                "course_id"=>$courseID,
                "description"=>$description,
                "detail"=>$details,
                "location"=>$location,
                "price"=>$price,
                "course_start"=>$startDate,
                "course_end"=>$endDate,
                "course_duration"=>$duration,
                "course_teacher"=>$teacher,
                "prerequisites"=>$prerequisites,
                "updated_at"=>$update,
                "category"=>$category]);
            return $result;
        }

        else{
            $image = $image->store("public");
            $imageName = explode("/", $image)[1];
            $thumbnailPath = "storage/".$imageName;
            $result = courseModel::where("id",$id)->update([
                "course_name"=>$courseName,
                "course_id"=>$courseID,
                "location"=>$location,
                "price"=>$price,
                "detail"=>$details,
                "course_start"=>$startDate,
                "course_end"=>$endDate,
                "course_duration"=>$duration,
                "course_teacher"=>$teacher,
                "prerequisites"=>$prerequisites,
                "updated_at"=>$update,
                "image"=>$thumbnailPath,
                "category"=>$category
            ]);


            if ($result){
                imageModel::insert(["image_path"=> $imageName, "title"=>"From Course System"]);
            }

            return $result;
        }


    }

    public function getCourseDataByCategory($category){
        return courseModel::where("category", $category)->get();
    }
}
