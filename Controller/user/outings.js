import { studyPlans } from "../../Model/outings.js";

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
