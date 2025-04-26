// Animations
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Check Register Error
const form = document.querySelector("form");
const username = document.getElementById("username");
const usernameError = document.querySelector("#username-error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email-error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password-error");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Check email is valid
function checkEmail(email) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

email.addEventListener("input", function () {
  if (!checkEmail(email.value)) {
    emailError.textContent = "*Email is not valid";
  } else {
    emailError.textContent = "";
  }
});

// Check length input user name
username.addEventListener("input", function () {
  if (username.value.length < 4) {
    usernameError.textContent = "*Username must be at least 8 characters.";
  } else if (username.value.length > 20) {
    usernameError.textContent = "*Username must be less than 20 characters.";
  } else {
    usernameError.textContent = "";
  }
});

// Check length input password
password.addEventListener("input", function () {
  if (password.value.length < 8) {
    passwordError.textContent = "*Password must be at least 8 characters.";
  } else if (password.value.length > 20) {
    passwordError.textContent = "*Password must be less than 20 characters.";
  } else {
    passwordError.textContent = "";
  }
});

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `*${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default submission

  if (!checkRequired([username, email, password])) {
    // If validation passes, submit the form
    form.submit();
  }
});

// Check Login Error

let lgForm = document.querySelector(".form-lg");
let lgEmail = document.querySelector(".email-2");
let lgEmailError = document.querySelector(".email-error-2");
let lgPassword = document.querySelector(".password-2");
let lgPasswordError = document.querySelector(".password-error-2");

function showError2(input, message) {
  const formControl2 = input.parentElement;
  formControl2.className = "form-control2 error";
  const small2 = formControl2.querySelector("small");
  small2.innerText = message;
}

function showSuccess2(input) {
  const formControl2 = input.parentElement;
  formControl2.className = "form-control2 success";
  const small2 = formControl2.querySelector("small");
  small2.innerText = "";
}

// Check email is valid
function checkEmail2(lgEmail) {
  const emailRegex2 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex2.test(lgEmail);
}

lgEmail.addEventListener("input", function () {
  if (!checkEmail2(lgEmail.value)) {
    lgEmailError.textContent = "*Email is not valid";
  } else {
    lgEmailError.textContent = "";
  }
});

// Check length input passwrod
lgPassword.addEventListener("input", function () {
  if (lgPassword.value.length < 8) {
    lgPasswordError.textContent = "*Password must be at least 8 characters.";
  } else if (lgPassword.value.length > 20) {
    lgPasswordError.textContent = "*Password must be less than 20 characters.";
  } else {
    lgPasswordError.textContent = "";
  }
});

function checkRequiredLg(inputArr2) {
  let isRequiredLg = false;
  inputArr2.forEach(function (input) {
    if (input.value.trim() === "") {
      showError2(
        input,
        `*${getFieldNameLg(input)} Please enter your information in this field`
      );
      isRequiredLg = true;
    } else {
      showSuccess2(input);
    }
  });

  return isRequiredLg;
}

function getFieldNameLg(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

lgForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!checkRequiredLg([lgEmail, lgPassword])) {
    if (checkEmail2(lgEmail.value)) {
      // If all validations pass, submit the form
      lgForm.submit();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // تسجيل المستخدم الجديد
  const registerForm = document.querySelector("form[action='register.php']");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let formData = new FormData(this);

      // استخراج الدور (teacher أو student) من القائمة المنسدلة
      let selectedRole = document.querySelector(".dropdown-item.active");
      if (selectedRole) {
        formData.append("role", selectedRole.getAttribute("data-value"));
      }

      fetch("http://localhost/Mini_proje/php/register.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const registerMessage = document.getElementById("register-message");
          if (registerMessage) {
            registerMessage.innerText = data.message;
          }
          registerMessage.style.color =
            data.status === "success" ? "green" : "red";
        })
        .catch((error) => console.error("Error:", error));
    });
  }

  // تفعيل الخيار المختار من القائمة المنسدلة
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("roleDropdown").innerText = this.innerText;
      document
        .querySelectorAll(".dropdown-item")
        .forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const loginForm = document.querySelector("form[action='login.php']");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let formData = new FormData(this);

      fetch("http://localhost/Mini_proje/php/login.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const loginMessage = document.getElementById("login-message");
          if (loginMessage) {
            loginMessage.innerText = data.message;
            loginMessage.style.color =
              data.status === "success" ? "green" : "red";
          }

          if (data.status === "success") {
            setTimeout(() => {
              window.location.href = data.redirect; // تحويل المستخدم إلى صفحته الخاصة
            }, 2000);
          }
        })
        .catch((error) => console.error("Error:", error));
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const roleInput = document.getElementById("role");

  // فتح القائمة المنسدلة عند النقر على الزر
  dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // منع انتشار الحدث لإغلاق القائمة فورًا
    dropdownMenu.classList.toggle("show");
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });

  // تحديث زر القائمة وحفظ القيمة عند اختيار عنصر
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // منع إعادة تحميل الصفحة عند النقر على العنصر
      dropdownToggle.innerHTML =
        item.innerHTML +
        `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
                </svg>`;
      roleInput.value = item.getAttribute("data-value"); // حفظ القيمة في الحقل المخفي
      dropdownMenu.classList.remove("show"); // إغلاق القائمة بعد الاختيار
    });
  });
});
