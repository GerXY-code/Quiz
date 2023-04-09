<?php

namespace App\DTO;

class QuizDTO
{
    public function __construct(
        public string $title,
        public string $category,
        public array $questions,
        public bool $is_private
    ) {}
}

