import { projects as projectsModel } from "../../Model/projects.js";
import { getUrlParams } from "../../Utils/getUrlParams.js";

const projectsLS = JSON.parse(
  localStorage.getItem("projects") || JSON.stringify(projectsModel)
);

// Function to find project by ID
function findProjectById(id) {
  return projectsLS.find((project) => project.id === parseInt(id));
}

function populateProjectPage(project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectSubtitle").textContent = project.subtitle;
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectDescription").textContent =
    project.description;

  const videoElement = document.getElementById("projectVideo");
  videoElement.src = project.video;
  videoElement.title = project.title;
  const ownerElement = document.getElementById("projectOwner");
  ownerElement.textContent = `Feito por: ${project.owner}`;
}

// Initialize the page
function initializePage() {
  const queryParams = getUrlParams();
  const projectId = queryParams.id;

  const project = findProjectById(projectId);
  if (project) {
    populateProjectPage(project);
  }
}

document.addEventListener("DOMContentLoaded", initializePage);
