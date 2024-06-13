<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Album extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'artist','user_id'];


    // Relationship with User
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
