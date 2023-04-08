<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('answers', function(Blueprint $table){
            $table->id();
            $table->string('answer_1')->nullable();
            $table->string('answer_2')->nullable();
            $table->string('answer_3')->nullable();
            $table->string('answer_4')->nullable();
            $table->string('correct_answer');

    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('answers');

    }
};
