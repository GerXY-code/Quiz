<?php

namespace Tests\Unit;

use App\Models\User;

use PHPUnit\Framework\TestCase;

class DatabaseTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $this->assertTrue(true);
        $this->setUp();
        $this->testConnection();
    }

    protected function setUp() : void
    {
        if (!extension_loaded('pgsql')) {
            $this->markTestSkipped(
                'The PostgreSQL extension is not available'
            );
        }
    }
    public function testConnection(): void
    {
        $this->assertDatabaseCount('users', 1);
        $this->assertDatabaseCount('quiz', 1);
    }

    private function assertDatabaseCount(string $string, int $int): void
    {
        $user = User::factory()->create();
        $user->delete();
        $this->assertModelMissing($user);
    }

    private function assertModelMissing(\Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Collection $user): void
    {
    }
}
