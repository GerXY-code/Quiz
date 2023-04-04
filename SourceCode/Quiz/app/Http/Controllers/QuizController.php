<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index(){
        return \App\Models\Quiz::select('title','category','is_private')->get();
    }

    public function show(Quiz $quiz){
        return response()->json([
                'quiz' => $quiz
        ]);
    }
}
