// Get user data by email from localStorage
function getUserDataByEmail(email) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  // Find the user with the provided email
  const userData = users.find((user) => user.email === email);
  return userData;
}

const loggedInEmail = localStorage.getItem("loggedInUser");

if (loggedInEmail) {
  const userData = getUserDataByEmail(loggedInEmail);
  if (userData) {
    document.getElementById(
      "title"
    ).innerHTML = `Bem-vindo à Escape Room <br> do TSIW ${userData.name}`;
  }
}
