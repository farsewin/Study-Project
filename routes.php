<?php

$router->get('/', 'index.php');
$router->get('/about', 'about.php');
$router->get('/contact', 'contact.php');

// nav for student
$router->get('/dashboard', 'student/dashboard/index.php')->only('auth');
$router->get('/projects', 'projects/index.php')->only('auth');
$router->get('/projects/create', 'projects/create.php')->only('auth');
$router->post('/projects', 'projects/store.php')->only('auth');
$router->get('/projects/edit', 'projects/edit.php')->only('auth');
$router->patch('/projects', 'projects/update.php')->only('auth');
$router->get('/projects/show', 'projects/show.php')->only('auth');
$router->get('/proposals', 'proposals/index.php')->only('auth');
$router->get('/proposals/create', 'proposals/create.php')->only('auth');
$router->post('/proposals', 'proposals/store.php')->only('auth');
$router->get('/proposals/edit', 'proposals/edit.php')->only('auth');
$router->patch('/proposals', 'proposals/update.php')->only('auth');
$router->get('/proposals/show', 'proposals/show.php')->only('auth');




$router->get('/notes', 'notes/index.php')->only('auth');
$router->get('/note', 'notes/show.php');
$router->delete('/note', 'notes/destroy.php');

$router->get('/note/edit', 'notes/edit.php');
$router->patch('/note', 'notes/update.php');

$router->get('/notes/create', 'notes/create.php');
$router->post('/notes', 'notes/store.php');

$router->get('/register', 'registration/create.php')->only('guest');
$router->post('/register', 'registration/store.php')->only('guest');

$router->get('/login', 'session/create.php')->only('guest');
$router->post('/session', 'session/store.php')->only('guest');
$router->delete('/session', 'session/destroy.php')->only('auth');
