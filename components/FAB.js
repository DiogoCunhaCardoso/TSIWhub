const fabHTML = `
  <a href="${
    localStorage.getItem("loggedInUser")
      ? "/escapeRoom/startView.html"
      : "/View/login.html"
  }">
    <button style="animation-duration: 6s;" class="animate-bounce z-20 fixed bottom-28 lg:bottom-24 right-10 bg-violet-500 text-white rounded-full aspect-square py-3 px-8 shadow-lg hover:scale-105 hover:bg-violet-600 transition">
      E.R.
    </button>
  </a>
`;

document.getElementById("FABDiv").innerHTML = fabHTML;
