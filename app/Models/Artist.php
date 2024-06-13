<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Artist extends Model
{
    use HasFactory;

    protected $fillable = ['name','user_id', 'id'];

    // Relationship with User

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
