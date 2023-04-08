<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use \App\Models\Quiz;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{
    
    public function index(Request $request){
        $quizzes = Quiz::all();


        //Outputting for debug, default commented out
        /*
        foreach($quizes as $q){
            echo $q['title'];
            echo ' ';
            echo $q['category'];
        }
        */
        return Inertia::render('Quizzes/Quiz', ['quizzes' => $quizzes]);


    }
    


        
    
  
}
