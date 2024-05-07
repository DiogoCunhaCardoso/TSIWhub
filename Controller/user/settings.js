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
function updateValues(userData) {
  if (userData) {
    username.innerHTML = `${userData.name} ${userData.surname}`;
    firstName.value = `${userData.name}`;
    lastName.value = `${userData.surname}`;
    emailInput.value = `${userData.email}`;
    pfp.src = userData.pfp ? userData.pfp : "https://placehold.co/112";
  }
}

// Display user info from localStorage
if (loggedInEmail) {
  const userData = getUserByEmail(loggedInEmail);
  updateValues(userData);

  // Change Info
  saveInfo.addEventListener("click", function (e) {
    e.preventDefault();

    const newUserData = {
      name: firstName.value,
      surname: lastName.value,
      email: emailInput.value,
      password: userData.password,
      pfp: userData.pfp,
      role: "user",
    };

    // Update user data in users array
    const index = users.findIndex((user) => user.email === userData.email);
    if (index !== -1) {
      users[index] = newUserData;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", emailInput.value);
      updateValues(newUserData);
    }
  });
}

// Add PFP
inputPhoto.addEventListener("change", () => {
  if (inputPhoto.files && inputPhoto.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      pfp.src = e.target.result;
      const userData = getUserByEmail(loggedInEmail);
      if (userData) {
        userData.pfp = e.target.result;
        const index = users.findIndex((user) => user.email === userData.email);
        if (index !== -1) {
          users[index] = userData;
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
    };
    reader.readAsDataURL(inputPhoto.files[0]);
  }
});

// Change Pass

const currentPassError = document.getElementById("passError");
const passDontMatch = document.getElementById("passDontMatch");
const shortPass = document.getElementById("shortPass");
const passSuccess = document.getElementById("pass-success");

savePass.addEventListener("click", (e) => {
  e.preventDefault();

  // HIDE ALL ERROR MESSAGES
  currentPassError.classList.add("hidden");
  passDontMatch.classList.add("hidden");
  shortPass.classList.add("hidden");

  //
  const userData = getUserByEmail(loggedInEmail);
  if (!userData || userData.password !== currentPass.value) {
    currentPassError.classList.remove("hidden");
    return;
  } else if (newPass.value.length < 6) {
    shortPass.classList.remove("hidden");
    return;
  } else if (
    !newPass.value ||
    !confPass.value ||
    newPass.value !== confPass.value
  ) {
    passDontMatch.classList.remove("hidden");
  } else {
    userData.password = newPass.value;
    const index = users.findIndex((user) => user.email === userData.email);
    if (index !== -1) {
      users[index] = userData;
      localStorage.setItem("users", JSON.stringify(users));
    }
    // Display success message
    passSuccess.classList.remove("hidden");
    setTimeout(() => {
      passSuccess.classList.add("hidden");
    }, 2000);

    currentPass.value = "";
    newPass.value = "";
    confPass.value = "";
  }
});
