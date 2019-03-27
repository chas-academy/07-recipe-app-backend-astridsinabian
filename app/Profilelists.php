<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profilelists extends Model
{

    protected $fillable = ['id', 'name', 'user_id', 'email'];

    public function user()
   {
       return $this->belongsTo(User::class);
   }
   
}
