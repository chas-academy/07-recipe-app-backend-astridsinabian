<?php

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::get('recipelists', 'RecipesController@index');
    Route::get('recipelists/{id}', 'RecipesController@show');
    Route::post('recipelists', 'RecipesController@store');
    Route::put('recipelists/{id}', 'RecipesController@update');
    Route::delete('recipelists/{id}', 'RecipesController@delete');

});
