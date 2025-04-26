
<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);
$user = $_SESSION['user'] ?? null;
// all projects avilable to the user
$projects = $db->query('select * from projects')->get();

// proposal for student
$proposals = $db->query('select * from proposals where student_id = :student_id', [
    'student_id' => $user['id']
])->get();

// final_selection for student
$final_selection = $db->query('select * from final_selection where student_id = :student_id', [
    'student_id' => $user['id']
])->get();


view('student/index.view.php', [
    'title' => 'Dashboard',
    'user' => $user,
    'projects' => count($projects),
    'proposals' => count($proposals),
    'final_selection' => count($final_selection),
]);