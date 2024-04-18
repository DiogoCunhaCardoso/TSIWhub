document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      localStorage.setItem("loggedInUser", email);
      // Redirect based on user role
      if (userData.role === "admin") {
        window.location.href = "index-admin.html";
      } else {
        window.location.href = "index.html";
      }
    } else {
      // Error Messages
      document.getElementById("emailError").classList.remove("hidden");
      document.getElementById("passwordError").classList.remove("hidden");
    }
  });
