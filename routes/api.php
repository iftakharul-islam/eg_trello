<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Str;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


 
Route::get('/redirect', function (Request $request) {
    $request->session()->put('state', $state = Str::random(40));
 
    $query = http_build_query([
        'client_id' => '1',
        'redirect_uri' => 'http://third-party-app.com/callback',
        'response_type' => '200',
        'scope' => '',
        'state' => $state,
    ]);
 
    return redirect('http://127.0.0.1:8000/api/oauth/authorize?'.$query);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
