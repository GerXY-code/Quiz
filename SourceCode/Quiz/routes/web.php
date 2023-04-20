<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\QuizController;


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

// route will be /quiz/{id}...

Route::get('/quiz/{id}', function() {

        $quizID = $_GET['param'];
        //$quiz = app(QuizController::class)->getByID($quizID);
        //$output = new Symfony\Component\Console\Output\ConsoleOutput();
        $output->writeln("<info>{$quiz}</info>");

        return Inertia::render('Quizzes/Quiz', ['quiz' => $quiz]);
})->middleware(['auth', 'verified'])->name('quiz');


//Route::get('/quiz/{id}', [QuizController::class, 'getById'])->name('quiz.getById');
Route::resource('/answers', AnswerController::class);

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    $quizzes = app(QuizController::class)->getAll();
    return Inertia::render('Home', [
        'quizzes' => $quizzes
    ]);
})->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
