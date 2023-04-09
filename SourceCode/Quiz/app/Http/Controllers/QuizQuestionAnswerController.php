<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use \App\DTO\QuizDTO;
use \App\DTO\QuestionDTO;
use \App\DTO\AnswerDTO;
use \App\Models\QuizQuestionAnswers;

class QuizQuestionAnswerController extends Controller
{
    public function index(){
        // TODO: Change this to return the quiz title and category as well.
        $queryResult = QuizQuestionAnswers::select('*')->join('questions as q', 'q.id', '=', 'quiz_question_answers.question_id')
            ->join('answers as a', 'a.id', '=', 'quiz_question_answers.answer_id')
            ->get();

        $quiz = $this->mapToQuizDTO($queryResult);
        
        return Inertia::render('Quizzes/Quiz', ['quiz' => $quiz]);
    }

    private function mapToQuizDTO($queryResult) {
        $questions = [];
        foreach($queryResult as $index) {
            $answers = [];
            if (isset($index->answer_1))
                array_push($answers, $index->answer_1);
            if (isset($index->answer_2))
                array_push($answers, $index->answer_2);
            if (isset($index->answer_3))
                array_push($answers, $index->answer_3);
            if (isset($index->answer_4))
                array_push($answers, $index->answer_4);
            $answer = new AnswerDTO($answers, $index->correct_answer);
            $question = new QuestionDTO($index->question_id, $index->question, $answer);
            array_push($questions, $question);
        }

        // title, category and is_private should come from queryResult 
        $quizDTO = new QuizDTO("title", "category", $questions, false);
        return $quizDTO;
    }
}
