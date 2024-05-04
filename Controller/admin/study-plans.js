import { studyPlans } from "../../Model/study-plans.js";

const tBody = document.querySelector("tbody");
let html = "";

Object.keys(studyPlans).forEach((year) => {
  studyPlans[year].forEach((subject) => {
    html += `
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          ${subject.subjectName}
        </th>
        <td class="px-6 py-4">${year}</td>
        <td class="px-6 py-4">${subject.semester}</td>
        <td class="px-6 py-4">${subject.ectsCount}</td>
        <td class="px-6 py-4">
          <a href="#" class="font-medium text-red-500 hover:underline">Delete</a>
        </td>
      </tr>
    `;
  });
});
tBody.innerHTML = html;

const btnAdd = document.getElementById("addToUc");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");

closeIcon.addEventListener("click", () => {
  popUp.classList.add("hidden");
});

btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

document.getElementById("popUpForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const ucName = document.getElementById("ucName").value;
  const year = parseInt(document.getElementById("year").value);
  const semester = parseInt(document.getElementById("semester").value);
  const ectsCount = parseInt(document.getElementById("ects").value);

  // Check if the year exists in studyPlans
  if (year in studyPlans) {
    // Check if the semester index is valid
    if (semester === 1 || semester === 2) {
      // Check if the array for the selected year and semester exists, if not, create it
      if (!Array.isArray(studyPlans[year][semester - 1])) {
        studyPlans[year][semester - 1] = [];
      }

      // Push the new subject data into the appropriate year and semester
      studyPlans[year][semester - 1].push({
        subjectName: ucName,
        year: year, // Include the year here
        semester: `Semester ${semester}`,
        ectsCount: ectsCount,
      });

      // Render the updated table
      renderTable();

      // Close the popup
      popUp.classList.add("hidden");
    } else {
      console.error("Invalid semester");
    }
  } else {
    console.error("Invalid year");
  }
});

function renderTable() {
  let html = "";
  Object.keys(studyPlans).forEach((year) => {
    studyPlans[year].forEach((subject) => {
      html += `
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ${subject.subjectName}
          </th>
          <td class="px-6 py-4">${year}</td>
          <td class="px-6 py-4">${subject.semester}</td>
          <td class="px-6 py-4">${subject.ectsCount}</td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-red-500 hover:underline">Delete</a>
          </td>
        </tr>
      `;
    });
  });
  tBody.innerHTML = html;
}
