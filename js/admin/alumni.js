import { alumni as alumnus } from "../data/alumni.js";

const tBody = document.querySelector("tbody");
let html = "";

alumnus.forEach((alumni) => {
  html += `
      <tr class="odd:bg-white even:bg-gray-50 border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          ${alumni.name}
        </th>
        <td class="px-6 py-4">${alumni.date}</td>
        <td class="px-6 py-4">${alumni.image}</td>
        <td class="px-6 py-4">${alumni.description}</td>
        <td class="px-6 py-4">
          <a href="#" class="font-medium text-red-500 hover:underline">Delete</a>
        </td>
      </tr>
    `;
});

tBody.innerHTML = html;
