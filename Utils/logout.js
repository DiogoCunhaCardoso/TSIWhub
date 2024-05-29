export function logout() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/View/login.html";
  }
}

// Make Button Do Function
document.getElementById("logoutButton") &&
  document
    .getElementById("logoutButton")
    .addEventListener("click", function () {
      logout();
    });
