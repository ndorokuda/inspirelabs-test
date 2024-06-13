<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\LegalController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Home Page
Route::get('/', function(){
    return inertia('Home',[
'isAuthenticated' => auth()->check(),
    ]);
});


// Albums


// Show Page to search Albums
Route::get('/albums', [AlbumController::class, 'index'])->name('album.index')->middleware('auth');

// Show Page to Manage Albums
Route::get('/manage-albums', [AlbumController::class, 'manageAlbums'])->name('album.manageAlbum')->middleware('auth');

// Delete Album from Favorites
Route::delete('/albums/{album}', [AlbumController::class, 'destroy'])->name('album.destroy');

// Store Album to Favorites
Route::post('/album', [AlbumController::class, 'store'])->name('album.store');


// Artists

// Show Page to search Artists
Route::get('/artists', [ArtistController::class, 'index'])->name('artist.index')->middleware('auth');

// Show Page to Manage Artists
Route::get('/manage-artists', [ArtistController::class, 'manageArtists'])->name('album.manageArtist')->middleware('auth');


// Store Artist to Favorites
Route::post('/artist', [ArtistController::class, 'store'])->name('artist.store');

// Delete Artist from Favorites
Route::delete('/artist/{artist}', [ArtistController::class, 'destroy'])->name('artist.destroy');


// Profile

// Show register user form
Route::get('/register', [UserController::class, 'create'])->name('user.create')->middleware('guest');

// Store new user
Route::post('/users', [UserController::class, 'store'])->name('user.store');

// Show User login form
Route::get('/login', [UserController::class, 'login'])->name('login')->middleware('guest');

Route::post('/login', [UserController::class, 'authenticate']);

// Logout User
Route::post('/logout', [UserController::class, 'logout'])->name('user.logout');


// Legals

Route::get('/about',[LegalController::class,'about'])->name('about');




