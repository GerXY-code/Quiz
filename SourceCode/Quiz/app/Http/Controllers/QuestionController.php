<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    public function createQuestion(Request $request){
        Question::create([
            'question' => $request['question'],
        ]);
    }




}
