<?php

namespace App\Http\Controllers;
use \App\Models\Quiz;
use \App\Models\Category;
use \App\DTO\AnswerDTO;
use \App\DTO\QuestionDTO;
use \App\DTO\QuizDTO;
use \App\Models\QuizQuestionAnswers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Output\ConsoleOutput;
use Illuminate\Database\Eloquent\Relations\HasOne;


class QuizController extends Controller
{

    
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
        $page = $request->has('page') ? $request->get('page') : 1;
        $limit = $request->has('limit') ? $request->get('limit') : 10;
        if ($request->has('category')) {
            $category = $request->get('category');
            $queryResult = $queryResult->whereHas('category', function ($q) use ($category) {
                $q->where('category', $category);
            });
        }
        return $queryResult->limit($limit)->offset(($page - 1) * $limit)->get();
    }

   

    public function createQuiz(Request $request){

       $getChosenCategory = DB::table('categories')->where('category','=', $request['category'])->first();

       Quiz::create([
                'title'       => $request['title'],
                'quiz_cover'  => $request['quiz_cover'],
                'is_private'  => $request['isPrivate'],
                'category_id' => $getChosenCategory->id,
        ]);
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
