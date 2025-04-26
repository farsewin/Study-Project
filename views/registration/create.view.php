<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Andev web - Validar formulario</title>
  <link rel="stylesheet" href="css/login.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
</head>

<body>
  <div class="container" id="container">
    <div class="form-container register-container">
      <form action="/register" method="POST">
        <h1>إنشاء حساب</h1>

        <div class="form-control">
          <input type="text" name="username" id="username" placeholder="الاسم" required />
          <small id="username-error"></small>
          <span></span>
        </div>

        <div class="form-control">
          <input type="text" name="lastname" id="lastname" placeholder="اللقب" required />
          <small id="username-error"></small>
          <span></span>
        </div>

        <div class="form-control">
          <input type="email" name="email" id="email" placeholder="البريد الإلكتروني" required />
          <small id="email-error"></small>
          <span></span>
        </div>

        <div class="form-control">
          <div class="dropdown">
            <div class="dropdown-toggle" id="roleDropdown">
              نوع المستخدم
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item" data-value="teacher">أستاذ</a></li>
              <li><a href="#" class="dropdown-item" data-value="student">طالب</a></li>
            </ul>
          </div>
          <input type="hidden" name="role" id="role" required>
        </div>


        <div class="form-control">
          <input type="password" name="password" id="password" placeholder="كلمة المرور" required />
          <small id="password-error"></small>
          <span></span>
        </div>

        <button type="submit">حفظ</button>
        <p id="register-message"><?= $error ?></p>



      </form>
    </div>


    <div class="form-container login-container">
      <form class="form-lg" action="/session" method="POST">
        <h1>تسجيل الدخول</h1>
        <div class="form-control2">
          <input type="email" class="email-2" id="email2" name="email" placeholder="البريد الالكتروني" />
          <small class="email-error-2"></small>
          <span></span>
        </div>
        <div class="form-control2">
          <input type="password" class="password-2" id="password2" name="password" placeholder="كلمة المرور" />
          <small class="password-error-2"></small>
          <span></span>
        </div>

        <div class="content">
          <div class="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label for="">تذكرني</label>
          </div>
          <div class="pass-link">
            <a href="#">هل نسيت كلمة المرور؟</a>
          </div>
        </div>
        <button type="submit" value="submit">تسجيل الدخول</button>
        <p id="login-message">
          <?= isset($error) ? htmlspecialchars($error) : '' ?>
        </p>

        <div class="social-container">
          <a href="#" class="social"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class "social"><i class="fa-brands fa-google"></i></a>
          <a href="#" class="social"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </form>
    </div>

    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1 class="title">!!إذا كان لديك حساب<br> قم بتسجيل الدخول هنا</h1>
          <button class="ghost" id="login">تسجيل الدخول<i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1 class="title">إذا لم يكن لديك حساب بعد<br />سجل من هنا</h1>
          <button class="ghost" id="register">
            سجل
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
<script src="java/login.js"></script>

</html>