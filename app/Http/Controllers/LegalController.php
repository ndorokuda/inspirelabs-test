<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LegalController extends Controller
{
    public function about(){
        return inertia('Legal/AboutUs',[

            'isAuthenticated'=>auth()->check(),
        ]);
    }
}
