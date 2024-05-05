const studyPlansLS = JSON.parse(localStorage.getItem("studyPlans") || "{}");

const tBody = document.querySelector("tbody");
let html = "";

Object.keys(studyPlansLS).forEach((year) => {
  studyPlansLS[year].forEach((subject) => {
    html += `
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          ${subject.subjectName}
        </th>
        <td class="px-6 py-4">${year}</td>
        <td class="px-6 py-4">${subject.semester}</td>
        <td class="px-6 py-4">${subject.ectsCount}</td>
        <td class="px-6 py-4">
          <a href="#" class="delete-subject font-medium text-red-500 hover:underline">Delete</a>
        </td>
      </tr>
    `;
  });
});
tBody.innerHTML = html;

// POP UP
const btnAdd = document.getElementById("addToUc");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");
const form = document.querySelector("form");

closeIcon.addEventListener("click", () => {
  popUp.classList.add("hidden");
});

btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

//ADD NEW UC
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ucName = document.getElementById("ucName").value;
  const year = parseInt(document.getElementById("year").value);
  const semester = parseInt(document.getElementById("semester").value);
  const ectsCount = parseInt(document.getElementById("ects").value);

  if (!(year in studyPlansLS)) {
    alert(`No year ${year}`);
    return;
  }

  const yearArray = studyPlansLS[year];
  const foundSemester = yearArray.find(
    (subject) => subject.semester === semester
  );

  if (!foundSemester) {
    alert(`No Semester ${semester} in year ${year}`);
    return;
  }

  const insertIndex = yearArray.indexOf(foundSemester);

  yearArray.splice(insertIndex, 0, {
    subjectName: ucName,
    semester: semester,
    ectsCount: ectsCount,
  });

  localStorage.setItem("studyPlans", JSON.stringify(studyPlansLS));

  renderTable();
  popUp.classList.add("hidden");
  form.reset();
});

function renderTable() {
  let html = "";
  Object.keys(studyPlansLS).forEach((year) => {
    studyPlansLS[year].forEach((subject) => {
      html += `
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ${subject.subjectName}
          </th>
          <td class="px-6 py-4">${year}</td>
          <td class="px-6 py-4">${subject.semester}</td>
          <td class="px-6 py-4">${subject.ectsCount}</td>
          <td class="px-6 py-4">
            <a href="#" class="delete-subject font-medium text-red-500 hover:underline">Delete</a>
          </td>
        </tr>
      `;
    });
  });
  tBody.innerHTML = html;

  // Reattach event listeners for delete buttons after rendering
  const deleteButtons = document.querySelectorAll(".delete-subject");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDelete);
  });
}

function handleDelete(e) {
  e.preventDefault();

  const confirmationModal = document.getElementById("popup-confirm");
  confirmationModal.classList.remove("hidden");

  const confirmButton = document.getElementById("DoDelete");
  confirmButton.addEventListener("click", () => {
    const tr = e.target.closest("tr");
    if (!tr) return;

    const index = Array.from(tr.parentElement.children).indexOf(tr);
    const year = tr.querySelector("td:nth-child(2)").textContent;

    studyPlansLS[year].splice(index, 1);
    localStorage.setItem("studyPlans", JSON.stringify(studyPlansLS));
    renderTable();
    confirmationModal.classList.add("hidden");
  });

  const cancelButton = document.getElementById("DoNotDelete");
  cancelButton.addEventListener("click", () => {
    confirmationModal.classList.add("hidden");
  });
}

// Initialize the table
renderTable();
