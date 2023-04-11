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
    
    public function index(){

        //Only the public quizzes will be showing up in the starter page
        $queryResult = Quiz::select('*')->where('is_private', '=', 0)->get();

        return Inertia::render('Quizzes/AllQuiz', ['quiz' => $queryResult]);

    }

        
    
  
}
