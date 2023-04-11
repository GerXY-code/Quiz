<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ConnectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quiz_question_answers')->insert([
            'quiz_id' => 1,
            'question_id' => 1,
            'answer_id' => 1,
            'user_id' => 1
        ]);
    }
}
