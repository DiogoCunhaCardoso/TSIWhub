import { events as eventsModel } from "../../Model/events.js";

if (!localStorage.getItem("events")) {
  localStorage.setItem("events", JSON.stringify(eventsModel));
}
const eventsLS = JSON.parse(localStorage.getItem("events"));

const tBody = document.querySelector("tbody");

// CONFIRM OR NOT - DELETE
function handleDelete(index) {
  const confirmationModal = document.getElementById("popup-confirm");
  confirmationModal.classList.remove("hidden");

  // YES
  const confirmButton = document.getElementById("DoDelete");
  confirmButton.addEventListener("click", () => {
    eventsLS.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(eventsLS));
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
  if (e.target.classList.contains("delete-event")) {
    const index = parseInt(e.target.dataset.index);
    handleDelete(index);
  }
});

// POPULATE HTML WITH EVENTS IN L.S.
function populateTable(event, index) {
  return `
          <tr class="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              ${event.title}
            </th>
            <td class="px-6 py-4">${event.subtitle}</td>
            <td class="px-6 py-4"><img src="${event.image}" alt="${event.title}" class="w-16 h-16 object-cover"></td>
            <td class="px-6 py-4">${event.description}</td>
            <td class="px-6 py-4">${event.date}</td>
            <td class="px-6 py-4">
              <button class="font-medium text-red-500 hover:underline delete-event" data-index="${index}">Delete</button>
            </td>
          </tr>
        `;
}

// (CALLBACK)
function renderTable() {
  let html = "";
  eventsLS.forEach((event, index) => {
    html += populateTable(event, index);
  });
  tBody.innerHTML = html;
}

renderTable();

// POP UP
const btnAdd = document.getElementById("addToEvents");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");
const form = document.querySelector("form");

closeIcon.addEventListener("click", () => {
  popUp.classList.add("hidden");
});

btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

//ADD NEW EVENT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const imagePath = document.getElementById("imagePath").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const maxId = eventsLS.reduce(
    (max, event) => (event.id > max ? event.id : max),
    0
  );
  // ADD AND UPDATE L.S.
  eventsLS.push({
    id: maxId + 1,
    title: title,
    subtitle: subtitle,
    image: imagePath,
    description: description,
    date: date,
  });
  localStorage.setItem("events", JSON.stringify(eventsLS));

  renderTable();
  popUp.classList.add("hidden");
  form.reset();
});
