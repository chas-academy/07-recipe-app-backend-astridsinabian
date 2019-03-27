<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profilelists;

class ProfilelistController extends Controller
{

    public function index($email) {
        return Profilelists::all()->where('email', $email);
    }

    public function store(Request $request) {
        $profilelist = Profilelists::create([
            'name' => $request->name, 
            'email' => $request->email
            ]);

        return $profilelist;
    }

    public function delete(Request $request, $id) 
    {
        if ($id != null) {
            $profilelist = Profilelists::find($id);
            $profilelist->delete();
        }
    }

}
