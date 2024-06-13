<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AlbumController extends Controller
{
    /**
     * Display a listing of albums.
     */
    public function index()
    {
        return inertia('Albums/Index',[
            'isAuthenticated'=> auth()->check(),
        ]);
    }

    /**
     * Show Manage albums form
     */
    public function manageAlbums()
    {

        $favoriteAlbums = Auth::user()->albums;


        return inertia('Albums/Manage',[
            'favoriteAlbums'=> $favoriteAlbums,
            'isAuthenticated'=> auth()->check(),

        ]);
    }

    /**
     * Store a newly created album in storage.
     */
    public function store(Request $request)
    {
        $validatedAlbumData = $request->validate([
            'name'=> 'required',
            'artist'=> 'required',

        ]);

        $validatedAlbumData['user_id'] = auth()->id();

        Album::create($validatedAlbumData);
    }

    /**
     * Remove album from storage.
     */
    public function destroy( Album $album)

    {
        $album->delete();
    }
}
