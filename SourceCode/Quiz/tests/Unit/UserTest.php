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
        $user = User::create([
            'name' => 'test',
            'email' => 'test@testemail.com',
            'password' => Hash::make('testest'),
        ]);

        $user = User::where('name', '=', 'test')->get()->all();

        $this->assertEquals('user_test', $user->name);
    }


   

}