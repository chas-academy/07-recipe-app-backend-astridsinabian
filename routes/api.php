<?php

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::get('recipelists/{email}', 'RecipesController@index');
    Route::post('recipelists/add', 'RecipesController@store');
    Route::get('recipelists/{id}', 'RecipesController@show');
    Route::delete('recipelists/{id}', 'RecipesController@delete');
    Route::get('profilelist/{email}', 'ProfilelistController@index');
    Route::post('profilelist/add', 'ProfilelistController@store');

});
