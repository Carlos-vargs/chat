<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\PasswordController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', [ChatController::class, 'index'])->name('home');

    Route::post('/current-chat', [ChatController::class, 'show']);

    Route::post('/create-group', [GroupController::class, 'store']);

    Route::post('/send-message', [ChatController::class, 'store']);

    Route::get('/change-password', [PasswordController::class, 'create'])->name('change-password');

    Route::post('/logout', [LogoutController::class, 'destroy']);
});

Route::get('/login', [LoginController::class, 'create'])->name('login');

Route::post('/login', [LoginController::class, 'store']);

Route::get('/register', [RegisterController::class, 'create'])->name('register');

Route::post('/register', [RegisterController::class, 'store']);

Route::get('/reset-password', [PasswordController::class, 'edit'])->name('reset-password');
