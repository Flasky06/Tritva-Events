<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /**
     * Send a password reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function sendResetLinkEmail(Request $request)
    {
        // Validate the request
        $this->validate($request, [
            'email' => 'required|email|exists:users,email', // Ensure email is valid and exists
        ]);

        // Attempt to send the password reset link
        $response = Password::sendResetLink(
            $request->only('email')
        );

        // Check if the response was successful
        return $response == Password::RESET_LINK_SENT
            ? back()->with(['status' => trans($response)]) // Show success message
            : back()->withErrors(['email' => trans($response)]); // Show error message
    }
}
