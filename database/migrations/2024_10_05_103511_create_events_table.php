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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('image_url'); // Assuming this will store the path or URL to the event image
            $table->longText('description');
            $table->enum('location_type', ['physical', 'virtual', 'hybrid']);
            $table->string('location');
            $table->string('category'); // Consider using a category ID for normalization
            $table->decimal('price', 8, 2)->nullable(); // Ticket price
            $table->decimal('available_tickets', 8, 0)->nullable(); // No. of available tickets
            $table->string('virtual_link')->nullable(); // Link for virtual events
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade'); // Reference to users table
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Assuming user_id is also referencing users table
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
