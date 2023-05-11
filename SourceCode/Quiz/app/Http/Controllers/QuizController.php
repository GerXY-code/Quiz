<?php

namespace App\Http\Controllers;
use \App\Models\Quiz;
use \App\DTO\AnswerDTO;
use \App\DTO\QuestionDTO;
use \App\DTO\QuizDTO;
use \App\Models\QuizQuestionAnswers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class QuizController extends Controller
{

    private const DEFAULT_LIMIT = 12;
    private const DEFAULT_PAGE = 1;
    
    public function getById($quizId){
        $queryResult = 
        QuizQuestionAnswers::select('*')
            ->join('questions as q', 'q.id', '=', 'quiz_question_answers.question_id')
            ->join('answers as a', 'a.id', '=', 'quiz_question_answers.answer_id')
            ->join('quizzes as qz', 'qz.id', '=', 'quiz_question_answers.quiz_id')
            ->where('qz.id','=', $quizId)
            ->get();

        if ($queryResult->isEmpty()) {
            return [];
        }
        return $this->mapToQuizDTO($queryResult);        
    }
    
    public function getAll($request){
        $queryResult = Quiz::with('category');
        $page = $request->has('page') ? $request->get('page') : self::DEFAULT_PAGE;
        $limit = $request->has('limit') ? $request->get('limit') : self::DEFAULT_LIMIT;

        if ($request->has('category')) {
            $category = $request->get('category');
            $queryResult = $queryResult->whereHas('category', function ($q) use ($category) {
                $q->where('category', $category);
            });
        }

        $totalPages = ceil($queryResult->count() / $limit);
        $queryResult = $queryResult->limit($limit)->offset(($page - 1) * $limit)->get();

        return [
            'quizzes' => $queryResult,
            'totalPages' => $totalPages,
        ];
    }

   

    public function createQuiz(Request $request){

       $getChosenCategory = DB::table('categories')->where('category','=', $request['category'])->first();
       
       $answers = [null,null,null,null];
       $correct_answers = [null,null,null,null];

        $counter = 0;
        while($counter < count($request['questions'])-1){
            for($i = 0; $i<count($request['questions'][$counter])-1; $i++){
                $answers[$i] = $request['questions'][$counter]['answers'][$i]['answer'];

            }
            for($i = 0; $i<count($request['questions'][$counter])-1; $i++){
                if($request['questions'][$counter]['answers'][$i]['isCorrect']){
                    $correct_answers[$i] = $request['questions'][$counter]['answers'][$i]['answer'];
                }
           }
            DB::table('answers')->insert([
                'answer_1'         =>  $answers[0],
                'answer_2'         =>  $answers[1],
                'answer_3'         =>  $answers[2],
                'answer_4'         =>  $answers[3],
                'correct_answer_1' =>  $correct_answers[0],  
                'correct_answer_2' =>  $correct_answers[1],  
                'correct_answer_3' =>  $correct_answers[2],  
                'correct_answer_4' =>  $correct_answers[3],  

            ]); 

            $answers = [null,null,null,null];
            $correct_answers = [null,null,null,null];

            $counter++;
        }

    }

    private function mapToQuizDTO($queryResult) {
        $questions = [];
        $title = $queryResult[0]->title;
        $category = $queryResult[0]->category;
        $cover = empty($queryResult[0]->quiz_cover) ? '' : $queryResult[0]->quiz_cover;
        $is_private = $queryResult[0]->is_private;
        foreach($queryResult as $index) {
            $answers = [];
            $correct_answers = [];
            if (isset($index->answer_1) && strlen($index->answer_1)>0)
                array_push($answers, $index->answer_1);
            if (isset($index->answer_2) && strlen($index->answer_2)>0)
                array_push($answers, $index->answer_2);
            if (isset($index->answer_3) && strlen($index->answer_3)>0)
                array_push($answers, $index->answer_3);
            if (isset($index->answer_4) && strlen($index->answer_4)>0)
                array_push($answers, $index->answer_4);

            if (isset($index->correct_answer_1) && strlen($index->correct_answer_1)>0)
                array_push($correct_answers, $index->correct_answers_answer_1);
            if (isset($index->correct_aanswer_2) && strlen($index->correct_answer_2)>0)
                array_push($correct_answers, $index->correct_answers_answer_2);
            if (isset($index->correct_answer_3) && strlen($index->correct_answer_3)>0)
                array_push($correct_answers, $index->correct_answers_answer_3);
            if (isset($index->correct_answer_4) && strlen($index->correct_answer_4)>0)
                array_push($correct_answers, $index->correct_answers_answer_4);
            $answer = new AnswerDTO($answers, $correct_answers);
            $question = new QuestionDTO($index->question_id, $index->question, $answer);
            array_push($questions, $question);
        }

        $quizDTO = new QuizDTO($title, /*$cover*/ $questions, $is_private);
        return $quizDTO;
    }

}
