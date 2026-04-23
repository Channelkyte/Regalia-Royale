const profileIcon = document.getElementById("profileIcon");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleRegister = document.getElementById("toggleRegister");

// Open Login Modal
profileIcon.addEventListener("click", function (e) {
  e.preventDefault();

  loginForm.classList.toggle("active");
  registerForm.classList.remove("active");
});

// Open Register Form
toggleRegister.addEventListener("click", function (event) {
  event.preventDefault();

  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  if (
    !loginForm.contains(e.target) &&
    !registerForm.contains(e.target) &&
    !profileIcon.contains(e.target)
  ) {
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");
  }
});
