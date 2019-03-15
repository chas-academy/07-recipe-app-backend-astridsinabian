<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;

class RecipesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except(['get', 'store', 'index', 'delete']);
    }

    public function index($email)
    {
        return Recipe::all()->where('email', $email);
    }

    public function show($id) 
    {
        return Recipe::find($id);
    }

    public function store(Request $request)
    {
        
        $recipe = Recipe::create([
            'name' =>$request->name,
            'email' => $request->email
        ]);

        return $recipe;
    }


    public function delete(Request $request, $id) 
    {
        if ($id != null) {
            $recipe = Recipe::find($id);
            $recipe->delete();
        }
    }


}
