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

    public function createAnswers(Request $request){
        Answer::create([
            'answer_1'       => $request['answer_1'], 
            'answer_2'       => $request['answer_2'], 
            'answer_3'       => $request['answer_3'], 
            'answer_4'       => $request['answer_4'], 
            'correct_answer_1' => $request['correct_answer_1'], 
            'correct_answer_2' => $request['correct_answer_2'], 
            'correct_answer_3' => $request['correct_answer_3'], 
            'correct_answer_4' => $request['correct_answer_4'], 


        ]);
    }
}
