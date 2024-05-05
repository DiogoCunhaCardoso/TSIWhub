// USER DROPDOWN
//
//
const avatarBtn = document.getElementById("avatarBtn");
avatarBtn.addEventListener("click", toggleDropdown);

// Function to toggle dropdown visibility
function toggleDropdown() {
  const dropdown = document.getElementById("avatarDropdown");
  dropdown.classList.toggle("hidden");
}

// Close dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("avatarDropdown");
  if (!dropdown.contains(event.target) && event.target !== avatarBtn) {
    dropdown.classList.add("hidden");
  }
});

// TOGGLE MOBILE MENU
//
//
// Add click event listener to mobile menu toggle button
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
mobileMenuToggle.addEventListener("click", toggleMobileMenu);

// Function to toggle mobile menu visibility
function toggleMobileMenu() {
  const mobileDropdown = document.getElementById("mobileDropdown");
  mobileDropdown.classList.toggle("hidden");
}

// GET LOGGED USER INFO
//
//
// Get user data by email from localStorage
function getUserDataByEmail(email) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  // Find the user with the provided email
  const userData = users.find((user) => user.email === email);
  return userData;
}

// Get logged-in user's email
const loggedInEmail = localStorage.getItem("loggedInUser");

// Get and Display logged-in user's email
if (loggedInEmail) {
  const userData = getUserDataByEmail(loggedInEmail);
  if (userData) {
    const name = userData.name;
    const surname = userData.surname;
    const initials =
      name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
    const formattedName =
      name.charAt(0).toUpperCase() +
      name.slice(1).toLowerCase() +
      " " +
      surname.charAt(0).toUpperCase() +
      surname.slice(1).toLowerCase();

    const avatarInitials = document.getElementById("avatarInitials");
    const avatarFullName = document.getElementById("avatarFullName");
    const avatarEmail = document.getElementById("avatarEmail");
    avatarInitials.textContent = initials;
    avatarFullName.textContent = formattedName;
    avatarEmail.textContent = loggedInEmail;
  }
}
