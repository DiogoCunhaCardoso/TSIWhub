import { projects as projectsModel } from "../../Model/projects.js";

if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify(projectsModel));
}
const projectsLS = JSON.parse(localStorage.getItem("projects"));

const tBody = document.querySelector("tbody");

function handleDelete(index) {
  const confirmationModal = document.getElementById("popup-confirm");
  confirmationModal.classList.remove("hidden");

  // Yes, delete button event listener
  const confirmButton = document.getElementById("DoDelete");
  confirmButton.addEventListener("click", () => {
    projectsLS.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projectsLS));
    renderTable();
    confirmationModal.classList.add("hidden");
  });

  // No, cancel button event listener
  const cancelButton = document.getElementById("DoNotDelete");
  cancelButton.addEventListener("click", () => {
    confirmationModal.classList.add("hidden");
  });
}

tBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-project")) {
    const index = parseInt(e.target.dataset.index);
    handleDelete(index);
  }
});

function populateTable(project, index) {
  return `
    <tr class="odd:bg-white even:bg-gray-50 border-b">
      <td class="px-6 py-4">${project.owner}</td>
      <td class="px-6 py-4 font-medium text-gray-900">${project.title}</td>
      <td class="px-6 py-4">${project.subtitle}</td>
      <td class="px-6 py-4"><img src="${project.image}" alt="${project.title}" class="w-16 h-16 object-cover"></td>
      <td class="px-6 py-4">${project.description}</td>
      <td class="px-6 py-4">${project.video}</td>
      <td class="px-6 py-4">
        <button class="font-medium text-red-500 hover:underline delete-project" data-index="${index}">Delete</button>
      </td>
    </tr>
  `;
}

// RENDER TABLE (CALLBACK)
function renderTable() {
  let html = "";
  projectsLS.forEach((project, index) => {
    html += populateTable(project, index);
  });
  tBody.innerHTML = html;
}

renderTable();

const btnAdd = document.getElementById("addToEvents");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");
const form = document.querySelector("form");

// OPEN
btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

// CLOSE
closeIcon.addEventListener("click", () => {
  popUp.classList.add("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const owner = document.getElementById("owner").value;
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const image = document.getElementById("imagePath").value;
  const description = document.getElementById("description").value;
  const video = document.getElementById("video").value;

  // Calculate the maximum ID from existing projects
  const maxId = projectsLS.reduce(
    (max, project) => (project.id > max ? project.id : max),
    0
  );

  // Create a new project object
  const newProject = {
    id: maxId + 1,
    owner: owner,
    title: title,
    subtitle: subtitle,
    image: image,
    description: description,
    video: video,
  };

  projectsLS.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projectsLS));

  renderTable();
  popUp.classList.add("hidden");
  form.reset();
});
