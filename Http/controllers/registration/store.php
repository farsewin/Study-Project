<?php

use Core\App;
use Core\Authenticator;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);

$username = $_POST['username'];
$role = $_POST['role'];
$email = $_POST['email'];
$password = $_POST['password'];


$errors = [];
if (!Validator::email($email)) {
    $errors['email'] = 'Please provide a valid email address.';
}

if (!Validator::string($password, 7, 255)) {
    $errors['password'] = 'Please provide a password of at least seven characters.';
}

if (! empty($errors)) {
    return view('registration/create.view.php', [
        'errors' => $errors
    ]);
}

$user = $db->query('select * from users where email = :email', [
    'email' => $email
])->find();

if ($user) {
    header('location: /');
    exit();
} else {
    if ($role == 'teacher') {
        $role = 2;
    } else {
        $role = 1;
    }
    // Insert the user into the database
    $db->query('INSERT INTO users(username, email, password, role) VALUES(:username, :email, :password, :role)', [
        'username' => $username,
        'email' => $email,
        'password' => password_hash($password, PASSWORD_BCRYPT),
        'role' => $role
    ]);

    // Fetch the newly created user
    $newUser = $db->query('SELECT * FROM users WHERE email = :email', [
        'email' => $email
    ])->find();

    // Pass the fetched user to the login method
    (new Authenticator)->login($newUser);

    header('location: /dashboard');
    exit();
}
