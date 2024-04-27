const moreInfo = [
  {
    image: "https://placehold.co/500x250",
    name: "Valor das propinas 2023/24:",
    description:
      "Estudante nacional — 697,00€/ano\nEstudante internacional — 3,000€/ano",
  },
  {
    image: "https://placehold.co/500x250",
    name: "Acesso",
    description:
      "(16) Matemática\n(19) Matemática A\nCondições Mínimas:\nNota de Candidatura: 95 pontos;\nProvas de Ingresso: 95 pontos",
  },
  {
    image: "https://placehold.co/500x250",
    name: "Outra Info",
    description: "Whatever is here",
  },
];

// Get the moreInfoDiv element
const moreInfoDiv = document.getElementById("moreInfoDiv");

// Loop through each item in the moreInfo array
moreInfo.forEach((plan) => {
  // Create the HTML for the card
  const cardHTML = `
    <div class="m-4 max-w-sm rounded-lg overflow-hidden bg-gray-100">
      <img src="${plan.image}" alt="${plan.name}" class="w-full">
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">${plan.name}</div>
        <p class="text-gray-700 text-base">${plan.description}</p>
      </div>
    </div>
  `;

  // Append the card HTML to the moreInfoDiv
  moreInfoDiv.innerHTML += cardHTML;
});
