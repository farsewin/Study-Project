<?php

use Core\Authenticator;
use Http\Forms\LoginForm;
use Core\ValidationException;

var_dump('login store'); // Debugging statement

try {
    // Validate the form inputs
    $form = LoginForm::validate($attributes = [
        'email' => $_POST['email'],
        'password' => $_POST['password']
    ]);

    var_dump($attributes); // Debug input data

    // Attempt to log the user in
    $signedIn = (new Authenticator)->attempt(
        $attributes['email'],
        $attributes['password']
    );

    var_dump('loginc store'); // Debugging statement

    // If login is successful, redirect to the dashboard
    if ($signedIn) {
        redirect('/dashboard');
    }

    // If login fails, throw an error
    $form->error(
        'email',
        'No matching account found for that email address and password.'
    )->throw();
} catch (ValidationException $e) {
    // If validation fails, return to the login page with an error message
    return view('registration/create.view.php', [
        'error' => $e->getMessage() ?? 'Invalid login credentials.'
    ]);
}
