<?php

namespace App\Http\Controllers;

use App\Models\imageModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class imageController extends Controller
{
    function getAllImage(){
        $imageData = imageModel::orderBy("id","DESC")->get();
        $data = array();
        foreach ($imageData as $item)
        {
            $itemArray = [
                'id'=>$item->id,
                "image_path"=>"storage/".$item->image_path,
                "title"=>$item->title
            ];
            array_push($data, $itemArray);
        }
        return $data;
    }

    function photoPost(Request $request){
        $photoURL = $request->file("image")->store("public");
        $getName = $request->input("name");
        $photoURLArray = explode('/',$photoURL)[1];
        return imageModel::insert(["image_path"=> $photoURLArray, "title"=>$getName]);
    }

    function deletePhoto(Request $request){
        $this->PhotoDeleteFromSource($request);
        imageModel::where("id", $request->id)->delete();
    }

    function PhotoDeleteFromSource($info){
        File::delete("storage/".explode('/',imageModel::select("image_path")->where("id",$info->id)->first()->image_path)[2]);
    }
}
