<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use \App\Models\QuizQuestionAnswers;

class QuizQuestionAnswerController extends Controller
{
    public function index(){
        $quizzes = QuizQuestionAnswers::select('*')->join('questions as q', 'q.id', '=', 'quiz_question_answers.question_id')
                                                 ->join('answers as a', 'a.id', '=', 'quiz_question_answers.answer_id')
                                                 ->get();

        
        return Inertia::render('Quizzes/Quiz', ['quizzes' => $quizzes]);
    }
}
