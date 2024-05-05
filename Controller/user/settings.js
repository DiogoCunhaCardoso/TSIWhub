// Info
const username = document.getElementById("usernameText");
const firstName = document.getElementById("name");
const lastName = document.getElementById("surname");
const emailInput = document.getElementById("email");

// Pass
const currentPass = document.getElementById("currentPass");
const newPass = document.getElementById("newPass");
const confPass = document.getElementById("confPass");

// Photo Stuff
const pfp = document.getElementById("pfp");
const inputPhoto = document.getElementById("fileInput");

// Buttons
const saveInfo = document.getElementById("saveInfo");
const savePass = document.getElementById("savePass");

// Get users array from localStorage
const users = JSON.parse(localStorage.getItem("users") || "[]");

// Function to find user by email in the users array
function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

// Function to update input values with user data
function updateInputValues(userData) {
  if (userData) {
    username.innerHTML = `${userData.name} ${userData.surname}`;
    firstName.value = `${userData.name}`;
    lastName.value = `${userData.surname}`;
    emailInput.value = `${userData.email}`;
  }
}

// Display user info from localStorage
if (loggedInEmail) {
  const userData = getUserByEmail(loggedInEmail);
  updateInputValues(userData);

  // Change Info
  saveInfo.addEventListener("click", function (e) {
    e.preventDefault();

    const newUserData = {
      name: firstName.value,
      surname: lastName.value,
      email: emailInput.value,
      password: userData.password,
      role: "user",
    };

    // Update user data in users array
    const index = users.findIndex((user) => user.email === userData.email);
    if (index !== -1) {
      users[index] = newUserData;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", emailInput.value);
      updateInputValues(newUserData);
    }
  });
}

// Add PFP
inputPhoto.addEventListener("change", () => {
  if (inputPhoto.files && inputPhoto.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      pfp.src = e.target.result;
    };
    reader.readAsDataURL(inputPhoto.files[0]);
  }
});

// Change Pass
savePass.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = getUserByEmail(loggedInEmail);
  if (!userData || userData.password !== currentPass.value) {
    alert("Incorrect current password");
    return;
  } else if (newPass.value.length < 6) {
    alert("Password should be at least 6 characters long");
    return;
  } else if (
    !newPass.value ||
    !confPass.value ||
    newPass.value !== confPass.value
  ) {
    alert("Passwords not matching");
    return;
  } else {
    userData.password = newPass.value;
    const index = users.findIndex((user) => user.email === userData.email);
    if (index !== -1) {
      users[index] = userData;
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Password changed successfully");

    currentPass.value = "";
    newPass.value = "";
    confPass.value = "";
  }
});
