<?php

namespace App\DTO;

class QuestionDTO
{
    public function __construct(
        public readonly int $number,
        public readonly string $question,
        public readonly AnswerDTO $answer) {}

}
