import { moreInfo } from "../../Model/more-info.js";

const moreInfoDiv = document.getElementById("moreInfoDiv");

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

  moreInfoDiv.innerHTML += cardHTML;
});
