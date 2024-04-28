import { studyPlans } from "../data/study-plans.js";

// Function to generate tables for each year
function generateStudyPlanTables() {
  const studyPlansContainer = document.getElementById("studyPlansContainer");

  // Loop through each year in the studyPlans array
  Object.keys(studyPlans).forEach((year) => {
    const yearData = studyPlans[year];

    // Create a new table element
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th class="border-b border-slate-400 px-4 bg-gray-100 py-2 text-start">Unidade curricular</th>
          <th class="border-b border-slate-400 px-4 bg-gray-100 py-2 text-start">Período</th>
          <th class="border-b border-slate-400 px-4 bg-gray-100 py-2 text-start">ECTS</th>
        </tr>
      </thead>
      <tbody>
        ${yearData
          .map(
            (subject) => `
          <tr>
            <td class="border-b border-slate-400 px-4 bg-gray-100 py-2">${subject.subjectName}</td>
            <td class="border-b border-slate-400 px-4 bg-gray-100 py-2">${subject.semester}</td>
            <td class="border-b border-slate-400 px-4 bg-gray-100 py-2">${subject.ectsCount}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    `;

    // Append the table to the container
    const yearHeading = document.createElement("p");
    yearHeading.textContent = `${year}º Ano`;
    yearHeading.classList.add("my-4", "font-bold");
    studyPlansContainer.appendChild(yearHeading);
    studyPlansContainer.appendChild(table);
  });
}

// Call the function to generate the tables when the page loads
window.addEventListener("load", generateStudyPlanTables);
