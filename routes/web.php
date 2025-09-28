<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home Page/Home');
});

Route::get('/organizer', function () {
    return Inertia::render('About/Organizer');
})->name('organizer');

// Catch-all route
Route::get('/{any}', function () {
    return Inertia::render('Home Page/Home');
})->where('any', '.*');

