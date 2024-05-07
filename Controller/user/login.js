import { alumni } from "../../Model/alumni.js";
import { studyPlans } from "../../Model/study-plans.js";
import { images } from "../../Model/images.js";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve & Find User
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userData = users.find((user) => user.email === email);

    if (userData && userData.password === password) {
      localStorage.setItem("loggedInUser", email);
      // Redirect based on user role
      if (userData.role === "admin") {
        window.location.href = "index-admin.html";
        startLS();
      } else {
        window.location.href = "index.html";
        startLS();
      }
    } else {
      // Error Messages
      document.getElementById("emailError").classList.remove("hidden");
      document.getElementById("passwordError").classList.remove("hidden");
    }
  });

// Check if Local Storage is populated
function startLS() {
  !localStorage.getItem("alumnus") &&
    localStorage.setItem("alumnus", JSON.stringify(alumni));
  !localStorage.getItem("studyPlans") &&
    localStorage.setItem("studyPlans", JSON.stringify(studyPlans));
  !localStorage.getItem("images") &&
    localStorage.setItem("images", JSON.stringify(images));
}
