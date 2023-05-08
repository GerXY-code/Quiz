<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Helpers\DBHelper;

class ConnectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quiz_question_answers')->insert([
            'quiz_id' => DBHelper::getRandomId('quizzes', 'id'),
            'question_id' => DBHelper::getRandomId('questions', 'id'),
            'answer_id' => DBHelper::getRandomId('answers', 'id'),
            'user_id' => DBHelper::getRandomId('users', 'id')
        ]);
    }

    
}
