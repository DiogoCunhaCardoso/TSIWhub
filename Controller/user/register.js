document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Hide error messages initially
    document.getElementById("emailError").classList.add("hidden");
    document.getElementById("passwordMatchError").classList.add("hidden");
    document.getElementById("passwordLengthError").classList.add("hidden");

    // Check if password meets minimum length requirement
    if (password.length < 6) {
      // Show error message
      document.getElementById("passwordLengthError").classList.remove("hidden");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      // Show error message
      document.getElementById("passwordMatchError").classList.remove("hidden");
      return;
    }

    // Check if user already exists in localStorage
    if (localStorage.getItem(email)) {
      // Show error message
      document.getElementById("emailError").classList.remove("hidden");
      return;
    }

    // Store user data in localStorage
    const userData = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      role: "user", // Set default role as user
    };
    localStorage.setItem(email, JSON.stringify(userData));

    // Redirect to login page
    window.location.href = "login.html";
  });
