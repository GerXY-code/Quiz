<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $randomString = Str::random(10);
        DB::table('answers')->insert([
            'answer_1' => Str::random(10),
            'answer_2' => Str::random(10),
            'answer_3' => Str::random(10),
            'answer_4' => $randomString,
            'correct_answer' => $randomString

        ]);
    }
}
