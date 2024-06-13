<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Users/Register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateUserDetails = $request->validate([
            'name'=> ['required', 'min:3'],
            'email'=>['required','email','unique:users,email'],
            'password'=> 'required|confirmed|min:6'
        ]);

        // Hashing the password

        $validateUserDetails['password'] = bcrypt($validateUserDetails['password']);

        // Create user and store in database
        $user = User::create($validateUserDetails);

        // Login the created user

        auth()->login($user);

        return redirect('/albums');


    }

    // Login User

    public function authenticate(Request $request)
    {
        $validateUserDetails = $request->validate([

            'email'=>['required','email'],
            'password'=> 'required'
        ]);



        if(auth()->attempt($validateUserDetails)){
            $request->session()->regenerate();
            return redirect('/albums');
        }


        return back()->withErrors([
            'email' => 'Invalid email/password',
        ]);

    }

    // Login User

    public function login()
    {
        return inertia('Users/Login');
    }

    /**
     * Logout User
     */
    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
