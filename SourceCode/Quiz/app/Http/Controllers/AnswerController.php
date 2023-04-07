<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use \App\Models\Answer;
use Illuminate\Support\Facades\Validator;

class AnswerController extends Controller
{
    public function index(){
        $answers = Answer::select('answer_1','answer_2','answer_3','answer_4')->get();


        //Outputting for debug, default commented out
        /*
        foreach($quizes as $q){
            echo $q['title'];
            echo ' ';
            echo $q['category'];
        }
        */
        return Inertia::render('Quizes/Answer', ['answers' => $answers]);
    }
}
