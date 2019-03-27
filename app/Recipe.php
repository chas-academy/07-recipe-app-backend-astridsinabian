<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['id', 'name', 'list_id', 'email'];

    public function profilelists()
    {
        return $this->belongsToMany(Profilelists::class);
    }
    
   

}
