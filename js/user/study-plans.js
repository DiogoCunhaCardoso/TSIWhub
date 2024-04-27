const studyPlans = {
  1: [
    {
      subjectName: "Algoritmia e Estruturas de Dados",
      semester: "1º Semestre",
      ectsCount: 7,
    },
    {
      subjectName: "Fundamentos de Design",
      semester: "1º Semestre",
      ectsCount: 6,
    },
    { subjectName: "Matemática I", semester: "1º Semestre", ectsCount: 5 },
    {
      subjectName: "Sistemas Computacionais",
      semester: "1º Semestre",
      ectsCount: 5,
    },
    { subjectName: "Tecnologias Web", semester: "1º Semestre", ectsCount: 7 },
    {
      subjectName: "Conceção e Produção Multimédia",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Interfaces e Design para Aplicações",
      semester: "2º Semestre",
      ectsCount: 6,
    },
    { subjectName: "Matemática II", semester: "2º Semestre", ectsCount: 5 },
    {
      subjectName: "Programação Orientada a Objetos",
      semester: "2º Semestre",
      ectsCount: 7,
    },
    { subjectName: "Projeto I", semester: "2º Semestre", ectsCount: 7 },
  ],
  2: [
    { subjectName: "Bases de Dados", semester: "1º Semestre", ectsCount: 5 },
    {
      subjectName: "Computação Gráfica",
      semester: "1º Semestre",
      ectsCount: 7,
    },
    {
      subjectName: "Engenharia de Software",
      semester: "1º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Ergonomia Cognitiva e Design de Interação",
      semester: "1º Semestre",
      ectsCount: 5,
    },
    { subjectName: "Programação Web I", semester: "1º Semestre", ectsCount: 7 },
    {
      subjectName: "Inteligência Artificial",
      semester: "2º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Programação Web II",
      semester: "2º Semestre",
      ectsCount: 7,
    },
    { subjectName: "Projeto II", semester: "2º Semestre", ectsCount: 6 },
    {
      subjectName: "Testes e Performance Web",
      semester: "2º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Análise de Filmes (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Cultura Digital (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Laboratório I (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Laboratório II (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Programação I (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Programação III (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Publicação e Divulgação em Media Digitais (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    { subjectName: "Som (opcional)", semester: "2º Semestre", ectsCount: 5 },
    {
      subjectName: "Som e Imagem (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
    { subjectName: "Som I (opcional)", semester: "2º Semestre", ectsCount: 5 },
    {
      subjectName: "Teoria e Análise da Imagem (opcional)",
      semester: "2º Semestre",
      ectsCount: 5,
    },
  ],
  3: [
    {
      subjectName: "Computação Móvel e Ubíqua",
      semester: "1º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Inovação e Empreendedorismo",
      semester: "1º Semestre",
      ectsCount: 5,
    },
    {
      subjectName: "Negócio Eletrónico e Segurança",
      semester: "1º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Prototipagem Avançada em Plataformas Digitais",
      semester: "1º Semestre",
      ectsCount: 6,
    },
    {
      subjectName: "Serviços e Interfaces para a Cloud",
      semester: "1º Semestre",
      ectsCount: 7,
    },
    { subjectName: "Marketing Digital", semester: "2º Semestre", ectsCount: 3 },
    {
      subjectName: "Projeto Final/Estágio",
      semester: "2º Semestre",
      ectsCount: 23,
    },
    {
      subjectName: "Usabilidade e User Experience",
      semester: "2º Semestre",
      ectsCount: 4,
    },
  ],
};

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
