<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizQuestionAnswers extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_id',
        'question_id',
        'answer_id',
        'user_id'
    ];
}
