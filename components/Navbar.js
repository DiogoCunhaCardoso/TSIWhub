function createNavbar(selectedItem) {
  const menuItems = [
    { text: "Presentation", href: "/View/index.html" },
    { text: "Study Plans", href: "/View/user/study-plans.html" },
    { text: "Outings", href: "/View/user/outings.html" },
    { text: "+Info", href: "/View/user/more-info.html" },
    { text: "Alumni", href: "/View/user/alumni.html" },
    { text: "Projects", href: "/View/user/projects.html" },
    { text: "Settings", href: "/View/user/settings.html" },
    { text: "Sign Out", href: "/View/login.html" },
  ];

  const desktopMenuItems = menuItems.slice(0, -2); // No PC não tem as ultimas duas na navbar

  const navbarHTML = `
    <nav class="flex justify-between items-center bg-violet-600 py-4 px-6 fixed top-0 w-dvw">
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
              (menuItem) =>
                `<a href="${menuItem.href}" class="block ${
                  selectedItem === menuItem.text
                    ? "text-white px-4 py-2 bg-violet-900"
                    : "text-white px-4 py-2 hover:bg-violet-500"
                }">${menuItem.text}</a>`
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
            <span id="avatarInitials" class="font-medium text-gray-600 dark:text-violet-900 select-none pointer-events-none"></span>
          </div>
          <!-- User Dropdown Menu -->
          <div id="avatarDropdown" class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 right-0 mt-2 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div class="font-medium truncate" id="avatarFullName"></div>
              <div id="avatarEmail"></div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a href="/View/user/settings.html" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="/View/login.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
  return navbarHTML;
}
