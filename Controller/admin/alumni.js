const alumnusLS = JSON.parse(localStorage.getItem("alumnus") || "[]");
const tBody = document.querySelector("tbody");

// CONFIRM OR NOT - DELETE
function handleDelete(index) {
  const confirmationModal = document.getElementById("popup-confirm");
  confirmationModal.classList.remove("hidden");

  // YES
  const confirmButton = document.getElementById("DoDelete");
  confirmButton.addEventListener("click", () => {
    alumnusLS.splice(index, 1);
    localStorage.setItem("alumnus", JSON.stringify(alumnusLS));
    renderTable();
    confirmationModal.classList.add("hidden");
  });

  // NO
  const cancelButton = document.getElementById("DoNotDelete");
  cancelButton.addEventListener("click", () => {
    confirmationModal.classList.add("hidden");
  });
}

// MAKE DELETE BUTTON TRIGGER
tBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-alumni")) {
    const index = parseInt(e.target.dataset.index);
    handleDelete(index);
  }
});

// POPULATE HTML WITH ALUMNI IN L.S.
function populateTable(alumni, index) {
  return `
    <tr class="odd:bg-white even:bg-gray-50 border-b">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ${alumni.name}
      </th>
      <td class="px-6 py-4">${alumni.date}</td>
      <td class="px-6 py-4">${alumni.image}</td>
      <td class="px-6 py-4">${alumni.description}</td>
      <td class="px-6 py-4">
        <button class="font-medium text-red-500 hover:underline delete-alumni" data-index="${index}">Delete</button>
      </td>
    </tr>
  `;
}

// USED TO RENDER TABLE ONLOAD & AFTER CRUD ALTERATIONS (CALLBACK)
function renderTable() {
  let html = "";
  alumnusLS.forEach((alumni, index) => {
    html += populateTable(alumni, index);
  });
  tBody.innerHTML = html;
}

renderTable();

// POP UP
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

//ADD NEW ALUMNI
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const year = document.getElementById("year").value;
  const imagePath = document.getElementById("imagePath").value;
  const description = document.getElementById("description").value;

  // ADD AND UPDATE L.S.
  alumnusLS.push({
    image: imagePath,
    name: fullName,
    date: year,
    description: description,
  });
  localStorage.setItem("alumnus", JSON.stringify(alumnusLS));

  renderTable();
  popUp.classList.add("hidden");
  form.reset();
});
