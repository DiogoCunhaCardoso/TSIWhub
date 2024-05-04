// Info
const username = document.getElementById("usernameText");
const firstName = document.getElementById("name");
const lastName = document.getElementById("surname");
const email = document.getElementById("email");

// Pass
const currentPass = document.getElementById("currentPass");
const newPass = document.getElementById("newPass");
const confPass = document.getElementById("confPass");

//Photo Stuff
const pfp = document.getElementById("pfp");
const inputPhoto = document.getElementById("fileInput");

// buttons
const saveInfo = document.getElementById("saveInfo");
const savePass = document.getElementById("savePass");

// Get user data by email from localStorage
function getUserDataByEmail(email) {
  return JSON.parse(localStorage.getItem(email));
}

function changeUserData(userData) {
  if (userData) {
    username.innerHTML = `${userData.name} ${userData.surname}`;
    firstName.value = `${userData.name}`;
    lastName.value = `${userData.surname}`;
    email.value = `${userData.email}`;
  }
}

function updateInputValues() {
  const userData = getUserDataByEmail(loggedInEmail);
  if (userData) {
    username.innerHTML = `${userData.name} ${userData.surname}`;
    firstName.value = `${userData.name}`;
    lastName.value = `${userData.surname}`;
    email.value = `${userData.email}`;
  }
}

let userData; // Declare userData outside of the if block

changeUserData(getUserDataByEmail(loggedInEmail));

// DISPLAY INFO FROM LOCAL STORAGE
if (loggedInEmail) {
  userData = getUserDataByEmail(loggedInEmail); // Assign userData inside the if block
  if (userData) {
    username.innerHTML = `${userData.name} ${userData.surname}`;
    firstName.value = `${userData.name}`;
    lastName.value = `${userData.surname}`;
    email.value = `${userData.email}`;
  }

  // CHANGE INFO
  saveInfo.addEventListener("click", function (e) {
    e.preventDefault();

    const newUserData = {
      name: firstName.value,
      surname: lastName.value,
      email: email.value,
      password: userData.password, //buscar pass antiga,
      role: "user",
    };
    if (email.value === userData.email) {
      localStorage.setItem(userData.email, JSON.stringify(newUserData));
    } else {
      localStorage.removeItem(userData.email);
      userData.email = email.value;
      localStorage.setItem(email.value, JSON.stringify(newUserData));
      localStorage.setItem("loggedInUser", email.value);
    }

    updateInputValues();
  });
}

// ADD PFP
inputPhoto.addEventListener("change", () => {
  if (inputPhoto.files && inputPhoto.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      pfp.src = e.target.result;
    };
    reader.readAsDataURL(inputPhoto.files[0]);
  }
});

//
//
//
//
//
// CORRECT NewPass ConfPass

//CHANGE PASS
savePass.addEventListener("click", (e) => {
  e.preventDefault();
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
    localStorage.setItem(userData.email, JSON.stringify(userData));
    alert("Password changed successfully");

    currentPass.value = "";
    newPass.value = "";
    confPass.value = "";
  }
});
