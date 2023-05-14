<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Helpers\DBHelper;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            'title' => Str::random(10),
            'category_id' => DBHelper::getRandomId('categories', 'id'),
            'is_private' => 0,
            'quiz_cover' => Str::random(10),
            'time_limit' => 30
        ]);
    }
}
