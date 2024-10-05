<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'image_url' => $this->faker->imageUrl(),
            'description' => $this->faker->paragraph,
            'location_type' => $this->faker->randomElement(['physical', 'virtual', 'hybrid']),
            'location' => $this->faker->address,
            'category' => $this->faker->word,
            'price' => $this->faker->randomFloat(2, 0, 100),
            'available_tickets' => $this->faker->numberBetween(1, 100),
            'virtual_link' => $this->faker->url,
            'start_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'end_date' => $this->faker->dateTimeBetween('+1 month', '+2 months'),
            'created_by' => User::factory(),
            'user_id' => User::factory(),
        ];
    }
}
