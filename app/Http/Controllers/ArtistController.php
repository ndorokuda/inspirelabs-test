<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Artists/Index',[
            'isAuthenticated'=> auth()->check(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created artist in storage.
     */
    public function store(Request $request)
    {
        $validatedArtistData = $request->validate([
            'name' => 'required',
        ]);

        $validatedArtistData['user_id'] = auth()->id();

        Artist::create($validatedArtistData);
    }

    /**
     * Show Manage artists form
     */
    public function manageArtists()
    {

        $favoriteArtists = Auth::user()->artists;


        return inertia('Artists/Manage',[
            'favoriteArtists'=> $favoriteArtists,
            'isAuthenticated'=> auth()->check(),

        ]);
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
    public function destroy( Artist $artist)

    {
        $artist->delete();
    }
}
