<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserTest extends TestCase
{

    public function test_user_exists()
    {
        
            $response = $this->get('/quizzes');
            $response->assertStatus(200);
            $response->assertSee('List');
            $response->assertDontSee('Create');
        
    

    }
    

   

}