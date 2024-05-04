import { alumni as alumnus } from "../../Model/alumni.js";

const tBody = document.querySelector("tbody");

// Function to generate HTML for each alumni object
function populateTable(alumni) {
  return `
    <tr class="odd:bg-white even:bg-gray-50 border-b">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ${alumni.name}
      </th>
      <td class="px-6 py-4">${alumni.date}</td>
      <td class="px-6 py-4">${alumni.image}</td>
      <td class="px-6 py-4">${alumni.description}</td>
      <td class="px-6 py-4">
        <a href="#" class="font-medium text-red-500 hover:underline">Delete</a>
      </td>
    </tr>
  `;
}

function renderTable() {
  let html = "";
  alumnus.forEach((alumni) => {
    html += populateTable(alumni);
  });
  tBody.innerHTML = html;
}

renderTable();

const btnAdd = document.getElementById("addToAlumnus");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");
const form = document.querySelector("form");

closeIcon.addEventListener("click", () => {
  popUp.classList.add("hidden");
});

btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const year = document.getElementById("year").value;
  const imagePath = document.getElementById("imagePath").value;
  const description = document.getElementById("description").value;

  // Push new alumni
  alumnus.push({
    image: imagePath,
    name: fullName,
    date: year,
    description: description,
  });
  renderTable();
  popUp.classList.add("hidden");
  form.reset();
});
