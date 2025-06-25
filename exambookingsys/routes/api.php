<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\Spa\LoginController;
use App\Http\Controllers\UserDataController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', function (Request $request) {
    return User::all();
});

Route::get('/userEmail', function (Request $request) {
    return response()->json($request->user()->email);
})->middleware('auth:sanctum');

Route::get('/authStat', function (Request $request) {
    if ($request->user('sanctum')) {
        return response()->json('auth');
    } else {
        return response()->json('not auth');
    }
});

//Store new user info
Route::post('/storeData', [UserDataController::class, 'store']);

Route::get('/getPending', [UserDataController::class, 'getPending']);

Route::get('/getApproved', [UserDataController::class, 'getApproved']);

Route::get('/getLocked', [UserDataController::class, 'getLocked']);

Route::get('/getDenied', [UserDataController::class, 'getDenied']);

Route::post('/approve', [UserDataController::class, 'approve']);

Route::post('/deny', [UserDataController::class, 'deny']);

Route::post('/lock', [UserDataController::class, 'lock']);

Route::post('/unlock', [UserDataController::class, 'unlock']);

Route::post('/delete', [UserDataController::class, 'delete']);

Route::get('/getUserData', [UserDataController::class, 'getUserData']);

Route::prefix('auth/spa')->group(function (){
    Route::post('/login', LoginController::class)->middleware('guest');
});





