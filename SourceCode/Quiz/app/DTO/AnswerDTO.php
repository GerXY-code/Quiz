<?php

namespace App\DTO;

class AnswerDTO
{
    public function __construct( 
        public array $answers,
        public string $correct_answer) {}
}

