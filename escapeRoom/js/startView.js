// Get user data by email from localStorage
function getUserDataByEmail(email) {
  return JSON.parse(localStorage.getItem(email));
}

const loggedInEmail = localStorage.getItem("loggedInUser");

if (loggedInEmail) {
  const userData = getUserDataByEmail(loggedInEmail);
  if (userData) {
    document.getElementById(
      "title"
    ).innerHTML = `Welcome to TSIW's <br> Escape Room ${userData.name}`;
  }
}
