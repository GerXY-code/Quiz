<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\CategoryController;
use Symfony\Component\Console\Output\ConsoleOutput;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/quiz/create/', function () {
    return Inertia::render('Quizzes/QuizEditor');
});

Route::get('/quiz/{id}', function (Request $request) {
    $quizId = $request->route('id');
    $quiz = app(QuizController::class)->getById($quizId);
    return Inertia::render('Quizzes/Quiz', ['quiz' => $quiz]);
});

Route::post('/quiz/create', function(Request $request) {
   
    $result = app(QuizController::class)->createQuiz($request);

});

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/quizzes', function (Request $request) {
    $quizzes = app(QuizController::class)->getAll($request);
    return $quizzes;
})->middleware(['auth', 'verified'])->name('home');

Route::get('/', function (Request $request) {
    
    $categories = app(CategoryController::class)->index();

    return Inertia::render('Home', [
        'categories' => $categories
    ]);
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
