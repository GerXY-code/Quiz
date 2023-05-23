<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use App\Models\User;

class UserCreateTest extends TestCase
{

    public function test_user_creation()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@test_email.com',
            'password' => Hash::make('testest'),
        ]);

        $user = User::where('name', '=', 'test')->get()->all();

        $this->assertEquals('test', $user[0]);
    }


}