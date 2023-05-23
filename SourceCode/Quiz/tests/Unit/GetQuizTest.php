<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{

    public function test_user_exists()
    {
        $quiz = DB::table('quiz')->where('id', 1)->first();
        
        $this->assertEquals('quiz_test', $quiz->getContent());


    }
    

   

}