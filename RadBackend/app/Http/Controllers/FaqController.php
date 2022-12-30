<?php

namespace App\Http\Controllers;

use App\Models\FaqModel;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function insertFaq(Request $request){
        $question = $request->input('question');
        $answer = $request->input('answer');
        return FaqModel::insert([
            "question"=>$question,
            "answer"=>$answer,
            "updated_at"=>now()
        ]);
    }

    public function getFaq(Request $request){
        return FaqModel::orderBy('id', 'desc')->get();
    }

    public function deleteFaq(Request $request){
        $id= $request->input("id");
        return FaqModel::where("id",$id)->delete();
    }

    public function updateFaq(Request $request){
        $id=$request->input('id');
        $question = $request->input('question');
        $answer = $request->input('answer');
        if (!$answer){
            return FaqModel::where('id', $id)->update(['question'=>$question]);
        }
        else{return FaqModel::where('id', $id)->update(['question'=>$question,'answer'=>$answer]);}
    }
    public function getFaqData(){
        return FaqModel::orderBy('id', 'desc')->get();
    }
}
