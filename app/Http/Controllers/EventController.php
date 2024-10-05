<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'price' => 'nullable|numeric',
            'available_tickets' => 'nullable|integer',
            'location_type' => 'required|in:physical,virtual,both',
            'location' => 'nullable|string',
            'virtual_link' => 'nullable|url',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
        ]);

        $event = Event::create(array_merge($validated, ['user_id' => Auth::id()]));

        return redirect()->route('events.index')->with('success', 'Event created successfully!');
    }
}
