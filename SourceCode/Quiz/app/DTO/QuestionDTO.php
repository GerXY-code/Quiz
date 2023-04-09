<?php

namespace App\DTO;

class QuestionDTO
{
    public function __construct(
        public int $number,
        public string $question,
        public AnswerDTO $answer) {}

}
