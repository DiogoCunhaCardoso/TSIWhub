import { studyPlans } from "../data/study-plans.js";

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
