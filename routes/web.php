<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home Page/Home');
});

Route::get('/organizer', function () {
    return Inertia::render('About/Organizer'); // must match page path
});

// Catch-all route
Route::get('/{any}', function () {
    return Inertia::render('Home Page/Home');
})->where('any', '.*');
