<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserExistingTest extends TestCase
{

    public function test_user_exists()
    {
        $quiz = DB::table('users')->where('name' , 'test')->first();
       
        $this->assertEquals('user_test', $quiz->name);
    }


   

}