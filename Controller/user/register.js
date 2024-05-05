document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    //
    //
    // ERROR MESSAGES
    document.getElementById("emailError").classList.add("hidden");
    document.getElementById("passwordMatchError").classList.add("hidden");
    document.getElementById("passwordLengthError").classList.add("hidden");
    // Check if password meets minimum length requirement
    if (password.length < 6) {
      document.getElementById("passwordLengthError").classList.remove("hidden");
      return;
    }
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      document.getElementById("passwordMatchError").classList.remove("hidden");
      return;
    }
    // Check if user already exists in localStorage
    if (localStorage.getItem(email)) {
      document.getElementById("emailError").classList.remove("hidden");
      return;
    }

    //
    //
    // ADD TO LOCAL STORAGE
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      role: "admin", // default user
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // Redirect to login page
    window.location.href = "login.html";
  });
