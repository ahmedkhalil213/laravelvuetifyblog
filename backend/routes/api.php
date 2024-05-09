<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Post\PostsController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Comment\CommentController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//users
route::resource('users',UserController::Class,['except'=>['create','edit']]);
//posts
route::resource('posts',PostsController::Class,['except'=>['create','edit']]);
//categories
route::resource('categories',CategoryController::Class,['except'=>['create','edit']]);
//comments
route::resource('comments',CommentController::Class,['except'=>['create','edit']]);
