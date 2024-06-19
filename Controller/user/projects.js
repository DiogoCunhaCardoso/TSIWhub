import { projects as projectsModel } from "../../Model/projects.js";

const projectsLS = JSON.parse(
  localStorage.getItem("projects") || JSON.stringify(projectsModel)
);

const projectsContainer = document.getElementById("allProjects");

// Initial index to display the first three projects
let currentIndex = 0;

// Function to create the HTML for a project card
function createProjectCard(project, index) {
  const scaleClass =
    index === currentIndex + 1 || index === currentIndex + 3 ? "scale-90" : "";

  return `
    <div class="aspect-video h-80 relative rounded-lg bg-cover bg-center mt-8 ${scaleClass}"
         style="background-image: url('${project.image}')">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <!-- Content -->
      <div class="absolute inset-0 flex flex-col gap-6 items-center justify-center text-white text-center p-4">
        <span class="flex flex-col items-center">
          <h2 class="text-white text-2xl font-bold select-none">${project.title}</h2>
          <p class="text-white select-none">${project.owner}</p>
        </span>
        <a href="projectShowcase.html?id=${index}" class="text-white font-medium select-none bg-purple-500 px-2.5 py-1.5 rounded-lg hover:scale-[1.02] transform block text-center">
          Ver Projeto
        </a>
      </div>
    </div>
  `;
}

// Render based on index
function renderProjects() {
  projectsContainer.innerHTML = "";
  for (
    let i = currentIndex;
    i < currentIndex + 3 && i < projectsLS.length;
    i++
  ) {
    const projectCardHTML = createProjectCard(projectsLS[i], i + 1);
    projectsContainer.innerHTML += projectCardHTML;
  }
}

// NEXT
function handleNextClick() {
  if (currentIndex + 3 < projectsLS.length) {
    currentIndex++;
    renderProjects();
  }
}

// PREV
function handlePreviousClick() {
  if (currentIndex > 0) {
    currentIndex--;
    renderProjects();
  }
}

renderProjects();

document
  .getElementById("nextButton")
  .addEventListener("click", handleNextClick);
document
  .getElementById("prevButton")
  .addEventListener("click", handlePreviousClick);
