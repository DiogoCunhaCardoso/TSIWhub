const studyPlans = [
  {
    name: "Conceção e desenvolvimento de software e produtos Web",
    description:
      "Desenvolvimento de softwares é a atividade de criar programas de computação, executada por um desenvolvedor ou grupo de desenvolvedores.",
  },
  {
    name: "Desenvolvimento de produtos multiplataforma",
    description:
      "O desenvolvimento de software multiplataforma refere-se à criação de aplicativos ou programas que podem ser executados em diferentes plataformas e sistemas operacionais sem a necessidade de serem reescritos ou adaptados.",
  },
  {
    name: "Desenvolvimento de plataformas de comercio e negócio eletrónico. UI/UX Developer",
    description:
      "Um UX/UI developer é responsável por criar interfaces digitais intuitivas e visualmente atraentes.",
  },
];

// Get the outingsDiv element
const outingsDiv = document.getElementById("outingsDiv");

// Loop through each item in the studyPlans array
studyPlans.forEach((plan) => {
  // Create the HTML for the card
  const cardHTML = `
    <div class="m-4 max-w-sm rounded-lg overflow-hidden bg-gray-100">
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">${plan.name}</div>
        <p class="text-gray-700 text-base">${plan.description}</p>
      </div>
    </div>
  `;

  // Append the card HTML to the outingsDiv
  outingsDiv.innerHTML += cardHTML;
});
