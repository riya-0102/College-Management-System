/* =====================================
   FIX: Reset animation on page load
===================================== */
window.addEventListener("pageshow", () => {
  document.body.classList.remove("page-exit");
});

/* =====================================
   HOME → LOGIN (ROLE SELECTION)
===================================== */
function goLogin(role) {
  localStorage.setItem("role", role);

  document.body.classList.add("page-exit");

  setTimeout(() => {
    // index.html (root) → HTML/login.html
    window.location.href = "HTML/login.html";
  }, 400);
}

/* =====================================
   LOGIN HANDLER
===================================== */
function login() {
  const role = localStorage.getItem("role");
  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const remember = document.getElementById("rememberMe")?.checked;

  if (!username || !password) {
    showWarning("Please fill all login details");
    return;
  }

  // remember me
  if (remember) {
    localStorage.setItem("savedUsername", username);
  } else {
    localStorage.removeItem("savedUsername");
  }

  document.body.classList.add("page-exit");

  setTimeout(() => {
    // login.html is inside HTML folder
    if (role === "admin") {
      window.location.href = "admin.html";
    } else if (role === "student") {
      window.location.href = "student.html";
    } else if (role === "faculty") {
      window.location.href = "faculty.html";
    }
  }, 400);
}

/* =====================================
   WARNING POPUP
===================================== */
function showWarning(message) {
  const popup = document.getElementById("warningPopup");
  if (!popup) return;

  popup.textContent = "⚠️ " + message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
}

/* =====================================
   REMEMBER ME AUTO-FILL
===================================== */
document.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("savedUsername");
  const usernameInput = document.getElementById("username");
  const rememberCheckbox = document.getElementById("rememberMe");

  if (savedUser && usernameInput && rememberCheckbox) {
    usernameInput.value = savedUser;
    rememberCheckbox.checked = true;
  }
});
