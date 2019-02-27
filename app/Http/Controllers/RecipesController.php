<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;

class RecipesController extends Controller
{


    public function index()
    {
        return Recipe::all();
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

    public function update(Request $request, $id) 
    {
        if($id != null) {
            Recipe::find('id', $id)->update($request->all());
        }
    }

    public function delete(Request $request, $id) 
    {
        if ($id != null) {
            $recipe = Recipe::find($id);
            $recipe->delete();
        }
    }


}
