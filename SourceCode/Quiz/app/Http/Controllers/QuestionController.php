<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Http\Controllers\QuestionController;

class QuestionController extends Controller
{
    public function createQuestion(Request $request){
        QuestionController::create([
            'question' => $request['question'],
        ]);
    }


}
