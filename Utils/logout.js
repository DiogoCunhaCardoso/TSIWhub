export function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "/View/login.html";
}

// Make Button Do Function
document.getElementById("logoutButton") &&
  document
    .getElementById("logoutButton")
    .addEventListener("click", function () {
      logout();
    });
