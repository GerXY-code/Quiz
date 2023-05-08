<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $answers = [];
        for ($i = 1; $i <= 4; $i++) {
            $answers["answer_{$i}"] = Str::random(10);
        }
        $correct_index = mt_rand(1,4);
        $answers["correct_answer_1"] = $answers["answer_{$correct_index}"];
        DB::table('answers')->insert($answers);
    }
}
