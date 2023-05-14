<?php

namespace App\DTO;

class AnswerDTO
{
    public function __construct(
        public readonly array $answers,
        public readonly array $correct_answer) {}
}

