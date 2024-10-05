<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Bonface',
            'email' => 'bonnienjuguna106@gmail.com',
            'password' => bcrypt('password1'),
            'email_verified_at' => time()
        ]);

        Event::factory()
            ->count(40)
            ->create();
    }
}
