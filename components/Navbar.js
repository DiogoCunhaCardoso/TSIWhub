function createNavbar(selectedItem) {
  const menuItems = [
    { text: "Apresentação", href: "/View/index.html" },
    { text: "Plano de Estudos", href: "/View/user/study-plans.html" },
    { text: "Saídas", href: "/View/user/outings.html" },
    { text: "+ Info", href: "/View/user/more-info.html" },
    { text: "Alumni", href: "/View/user/alumni.html" },
    { text: "Projetos", href: "/View/user/projects.html" },
    { text: "Definições", href: "/View/user/settings.html" },
    { text: "Sign Out", href: "/View/login.html" },
  ];

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  function getUserByEmail(email) {
    return users.find((user) => user.email === email);
  }
  const loggedInEmail = localStorage.getItem("loggedInUser");
  const userData = getUserByEmail(loggedInEmail);

  const desktopMenuItems = menuItems.slice(0, -2); // No PC não tem as ultimas duas na navbar

  //
  //
  //

  let navbarHTML = `
    <nav class="flex justify-between items-center bg-gray-800 py-4 px-6 fixed top-0 w-dvw">
      <a href="/View/index.html" class="text-white">
        <img src="/images/logo.svg" alt="logo" width="64" />
      </a>
      <!-- Mobile Menu --> 
      <div class="md:hidden">
        <!-- Hamburger menu button for Mobile -->
        <button id="mobileMenuToggle" class="text-white">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <!-- Dropdown Menu for Mobile -->
        <div id="mobileDropdown" class="hidden bg-gray-800 absolute top-[53.6px] left-0 right-0 z-10 py-2">
          ${menuItems
            .map(
              (menuItem) => `
                <a href="${menuItem.href}" class="block ${
                selectedItem === menuItem.text
                  ? "text-white px-4 py-2 bg-violet-900"
                  : "text-white px-4 py-2 hover:bg-violet-500"
              }" ${menuItem.text === "Sign Out" ? 'id="logoutButton"' : ""}>
                  ${menuItem.text}
                </a>`
            )
            .join("")}
        </div>
      </div>
      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-2 flex justify-center items-center">
        ${desktopMenuItems
          .map(
            (menuItem) =>
              `<a href="${menuItem.href}" class="${
                selectedItem === menuItem.text
                  ? "text-white font-semibold text-sm px-2 py-1 rounded-md bg-violet-900"
                  : "text-white font-semibold text-sm px-2 py-1 rounded-md hover:bg-violet-700"
              }">${menuItem.text}</a>`
          )
          .join("")}
        <!-- Avatar and Dropdown -->
        <div class="relative" id="avatarContainer">
         <div id="avatarBtn" class="w-8 h-8 rounded-full cursor-pointer bg-gray-100 flex items-center justify-center">
    ${
      userData && userData.pfp
        ? `<img src="${userData.pfp}" alt="profile picture" class="w-full h-full rounded-full object-cover pointer-events-none">`
        : `<span id="avatarInitials" class="font-medium text-gray-600 dark:text-violet-900 select-none pointer-events-none"></span>`
    }
  </div>
          <!-- User Dropdown Menu -->

            <div id="avatarDropdown" class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 right-0 mt-2 dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div class="font-medium truncate" id="avatarFullName">${
                  userData ? userData.name : "Sem conta logada"
                } ${userData ? userData.surname : ""}</div>
                <div id="avatarEmail">${
                  loggedInEmail ? loggedInEmail : ""
                }</div>
              </div>
              ${
                loggedInEmail
                  ? `<ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                       <li>
                         <a href="/View/user/settings.html" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Definições</a>
                       </li>
                     </ul>`
                  : ""
              }
              
              <div class="py-1">
  ${
    loggedInEmail
      ? `<a href="/View/login.html" id="logoutButton" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white select-none" onclick="localStorage.removeItem('loggedInUser')">Sign Out</a>`
      : `<a href="/View/login.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white select-none">Log In</a>`
  }
</div>

            </div>

        </div>
      </div>
    </nav>
  `;
  return navbarHTML;
}
