<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConnectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quiz_question_answers')->insert([
            'quiz_id' => $this->getRandomId('quizzes', 'id'),
            'question_id' => $this->getRandomId('questions', 'id'),
            'answer_id' => $this->getRandomId('answers', 'id'),
            'user_id' => $this->getRandomId('users', 'id')
        ]);
    }

    private function getRandomId($table, $id): int {
        return rand(1, DB::table($table)->count($id));
    }
}
