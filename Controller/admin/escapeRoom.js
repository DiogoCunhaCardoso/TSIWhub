import { questions } from "../../escapeRoom/Controller/model.js";

function createTables() {
  const tableWrapper = document.getElementById("tableWrapper");

  Object.entries(questions).forEach(([subjectName, subject]) => {
    const subjectParagraph = `<p class="font-medium text-lg mt-4 bg-violet-500 py-2 px-4 text-white rounded-lg shadow-md">${subjectName}</p>`;
    tableWrapper.insertAdjacentHTML("beforeend", subjectParagraph);

    // Create a table element for each subject
    const table = `
      <table class="w-full mt-4 text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Nº</th>
            <th scope="col" class="px-6 py-3">Question</th>

          </tr>
        </thead>
        <tbody>
          ${createTableBody(subjectName, subject)}
        </tbody>
      </table>
    `;
    tableWrapper.insertAdjacentHTML("beforeend", table);
    //
    //
    // Get each question in a subject
    Object.entries(subject).forEach(([questionKey, question]) => {
      if (question) {
        // Create a new table for the variants of the question
        const variantTable = `
          <table class="w-full mt-4 text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                ${createVariantHeader(question)}
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              ${createVariantTableBody(question)}
            </tbody>
          </table>
        `;

        // Append the variant table for the question
        tableWrapper.insertAdjacentHTML("beforeend", variantTable);
      }
    });
  });
}

function createTableBody(subjectName, subject) {
  let tableBody = "";

  // Iterate over each question in the subject
  Object.entries(subject).forEach(([questionKey, question]) => {
    tableBody += `
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          ${questionKey}
        </th>
        <td class="px-6 py-4">${question.text}</td>

      </tr>
    `;
  });

  return tableBody;
}

//
//
// FOR TABLE VARIANTS

function createVariantHeader(question) {
  let variantHeader = "";

  // Get the keys of the first variant
  const firstVariant = Object.values(question).find(
    (variant) => typeof variant === "object" && Object.keys(variant).length > 0
  );
  const variantKeys = Object.keys(firstVariant);

  // Create th elements for each key
  variantKeys.forEach((key) => {
    variantHeader += `<th scope="col" class="px-6 py-3">${key}</th>`;
  });

  return variantHeader;
}

function createVariantTableBody(question) {
  let variantTableBody = "";

  // Get the number of variants
  const variantCount = Object.keys(question).filter((key) =>
    key.startsWith("variant")
  ).length;

  // Iterate over each variant
  for (let i = 1; i <= variantCount; i++) {
    const variant = question[`variant${i}`];
    if (variant) {
      variantTableBody += `
        <tr class="odd:bg-white even:bg-gray-50 border-b">
          ${createVariantRow(variant)}
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-red-500 hover:underline">Delete</a>
          </td>
        </tr>
      `;
    }
  }

  return variantTableBody;
}

function createVariantRow(variant) {
  let variantRow = "";
  for (const prop in variant) {
    if (Array.isArray(variant[prop])) {
      variantRow += `<td class="px-6 py-4">${variant[prop].join(" | ")}</td>`;
    } else {
      variantRow += `<td class="px-6 py-4">${variant[prop]}</td>`;
    }
  }
  return variantRow;
}

window.onload = createTables;

//
//
// ADD POP UP
const btnAdd = document.getElementById("addToER");
const closeIcon = document.getElementById("closePopUp");
const popUp = document.getElementById("popup");
const popUpForm = document.getElementById("popUpForm");
const nextButton = document.getElementById("nextButton");
const nextButtonSecond = document.getElementById("nextButtonSecond");

// Close & Restart Pop-ups (Close Icon):
closeIcon.addEventListener("click", () => {
  popUpForm.style.display = "block";
  popUpForm.nextElementSibling.style.display = "none"; // second pop up
  popUp.classList.add("hidden");
});

// Open Pop-up (Add Button):
btnAdd.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

// Submit Pop-up Form:
popUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedSubject = document.getElementById("ucName").value;

  if (selectedSubject !== "") {
    // Close the first pop-up
    popUp.classList.add("hidden");
    // Open the second pop-up
    popUpForm.reset();
    popUpForm.style.display = "none";
    popUpForm.nextElementSibling.style.display = "block";
  } else {
    console.error("Please select a subject");
  }
});

// Navigate to Second Pop-up (Next Button):
nextButton.addEventListener("click", () => {
  popUpForm.style.display = "none";
  popUpForm.nextElementSibling.style.display = "block";
});

// Handle Second Pop-up Submission (Next Button - Second Pop-up):
nextButtonSecond.addEventListener("click", () => {
  const x = document.getElementById("x").value;
  const y = document.getElementById("y").value;
  const answer = document.getElementById("answer").value;

  // Add your logic here to handle the x, y, and answer values
  console.log("X:", x);
  console.log("Y:", y);
  console.log("Answer:", answer);

  popUp.classList.add("hidden");
});
