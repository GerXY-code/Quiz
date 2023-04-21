<?php

namespace App\Http\Controllers;
use \App\Models\Quiz;
use \App\DTO\AnswerDTO;
use \App\DTO\QuestionDTO;
use \App\DTO\QuizDTO;
use \App\Models\QuizQuestionAnswers;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    
    public function getById($quizId){
        $queryResult = QuizQuestionAnswers::select('*')
            ->from('quiz_question_answers as qqa')
            ->join('questions as q', 'q.id', '=', 'qqa.question_id')
            ->join('answers as a', 'a.id', '=', 'qqa.answer_id')
            ->join('quizzes as qz', 'qz.id', '=', 'qqa.quiz_id')
            ->where('qqa.id', '=', $quizId)
            ->get();


        $quiz = $this->mapToQuizDTO($queryResult);        
        return $quiz;
    }
    
    public function getAll(){
        $queryResult = Quiz::select('*')->where('is_private', '=', 0)->get();
        return $queryResult;
    }

    public function createQuiz(Request $request){
        Quiz::create([
                'title'      => $request['title'],
                'category'   => $request['category'],
                'is_private' => $request['is_private']
        ]);
    }

    private function mapToQuizDTO($queryResult) {
        $questions = [];
        $title = $queryResult[0]->title;
        $category = $queryResult[0]->category;
        $is_private = $queryResult[0]->is_private;
        foreach($queryResult as $index) {
            $answers = [];
            if (isset($index->answer_1) && strlen($index->answer_1)>0)
                array_push($answers, $index->answer_1);
            if (isset($index->answer_2) && strlen($index->answer_2)>0)
                array_push($answers, $index->answer_2);
            if (isset($index->answer_3) && strlen($index->answer_3)>0)
                array_push($answers, $index->answer_3);
            if (isset($index->answer_4) && strlen($index->answer_4)>0)
                array_push($answers, $index->answer_4);
            $answer = new AnswerDTO($answers, $index->correct_answer);
            $question = new QuestionDTO($index->question_id, $index->question, $answer);
            array_push($questions, $question);
        }

        $quizDTO = new QuizDTO($title, $category, $questions, $is_private);
        return $quizDTO;
    }

        
    
  
}
