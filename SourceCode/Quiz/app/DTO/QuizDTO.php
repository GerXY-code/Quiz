<?php

namespace App\DTO;

class QuizDTO
{

    public function __construct(
        public readonly string $title,
        public readonly string $category,
        public readonly array $questions,
        public readonly int $is_private
    ) {}
   
}

