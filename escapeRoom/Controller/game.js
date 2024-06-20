import {
  questions,
  items,
  clickableItems,
  coords_bubble,
  time,
  subjects,
  manualText,
  page,
  paginasCifra,
  simbolosRandom,
  cifraCerta,
  cifraCertaSimbolos,
  manual,
  cifraBook,
  UI,
  state,
} from "./model.js";
import { coordinatesArray, areaIds } from "./mapping.js";

function createHint(coords, text) {
  let pageElement = document.createElement("p");
  pageElement.setAttribute(
    "style",
    "position:absolute; z-index:1; color:#eead2d; display:none"
  );
  pageElement.innerText = text;
  pageElement.style.top = `${coords[0] * UI.height}px`;
  pageElement.style.left = `${coords[1] * UI.height}px`;
  document.getElementById("container").appendChild(pageElement);
  return pageElement;
}

let hint1Coords = [600, 530];
let hint2Coords = [450, 900];
let hint1 = createHint(hint1Coords, `_${page[1]}`);
let hint2 = createHint(hint2Coords, `${page[0]}_`);

function getRandomQuestionFromSubject(subject) {
  if (subject == "codigo") {
    UI.popupQuestion.innerHTML = `Decifra o código: ${
      cifraCertaSimbolos[cifraCerta][simbolosRandom[0]]
    }${cifraCertaSimbolos[cifraCerta][simbolosRandom[1]]}${
      cifraCertaSimbolos[cifraCerta][simbolosRandom[2]]
    }`;
    return {
      options: "",
      answer: `${simbolosRandom[0]}${simbolosRandom[1]}${simbolosRandom[2]}`,
    };
  } else {
    // Check if the subject exists
    if (!questions.hasOwnProperty(subject)) {
      console.log(`Subject ${subject} not found`);
      return;
    }
    const subjectQuestions = questions[subject];
    const questionKeys = Object.keys(subjectQuestions);

    if (questionKeys.length === 0) {
      console.log(`No questions found for ${subject}`);
      return;
    }

    // Select a random question
    const randomQuestionKey =
      questionKeys[Math.floor(Math.random() * questionKeys.length)];
    const randomQuestion = subjectQuestions[randomQuestionKey];

    const variantKeys = Object.keys(randomQuestion).filter(
      (key) => key !== "text"
    );

    if (variantKeys.length === 0) {
      console.log(`No variants found for ${randomQuestionKey}`);
      return;
    }

    // Select a random variant
    const randomVariantKey =
      variantKeys[Math.floor(Math.random() * variantKeys.length)];
    const randomVariant = randomQuestion[randomVariantKey];

    // Construct and return the selected question object
    return {
      question: randomQuestion.text.replace("(x)", randomVariant.x),
      options: randomVariant.options,
      answer: randomVariant.answer,
    };
  }
}
const itemsN = {
  two: document.getElementById("item_2"),
  three: document.getElementById("item_3"),
  four: document.getElementById("item_4"),
};

function openPopup(widget, subj, input = false) {
  UI.popup.style.display = "block";
  UI.popup.style.pointerEvents = "auto";
  UI.popupImage.setAttribute("src", "");
  state.currentSubj = subj;
  if (subj) {
    const questionObj = getRandomQuestionFromSubject(subj);
    if (subj != "codigo") {
      UI.popupQuestion.innerHTML = questionObj.question;
    }
    UI.options.innerHTML = "";
    if (widget == "monitor" && items.RCA_cable == "unavailable") {
      UI.popupQuestion.innerHTML =
        "O monitor está ligado mas não tem imagem (falta cabo RCA).";
    } else if (widget == "TV" && items.remote == "unavailable") {
      UI.popupQuestion.innerHTML =
        "A televisão está desligada (falta o comando).";
    } else if (input) {
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.id = "optionInput";
      inputElement.autocomplete = "off";

      const buttonElement = document.createElement("button");
      buttonElement.id = "optionSubmit";
      buttonElement.textContent = "Confirmar";

      buttonElement.addEventListener("click", () =>
        chooseOptionAndSubmit(inputElement.value, widget, input)
      );

      UI.options.appendChild(inputElement);
      UI.options.appendChild(buttonElement);
    } else {
      if (widget == "monitor" && items.RCA_cable == "available") {
        items.RCA_cable = "used";
        if (
          itemsN.two.style.backgroundImage ==
          'url("../../images/assets/Items/RCA.png")'
        ) {
          itemsN.two.style.backgroundImage = "";
        } else if (
          itemsN.three.style.backgroundImage ==
          'url("../../images/assets/Items/RCA.png")'
        ) {
          itemsN.three.style.backgroundImage = "";
        } else {
          itemsN.four.style.backgroundImage = "";
        }
      }
      if (widget == "TV" && items.remote == "available") {
        UI.popupImage.setAttribute("src", "../../images/assets/olho.png");
        items.remote = "used";
        if (
          itemsN.two.style.backgroundImage ==
          'url("../../images/assets/Items/Comando.png")'
        ) {
          itemsN.two.style.backgroundImage = "";
        } else if (
          itemsN.three.style.backgroundImage ==
          'url("../../images/assets/Items/Comando.png")'
        ) {
          itemsN.three.style.backgroundImage = "";
        } else {
          itemsN.four.style.backgroundImage = "";
        }
      }
      questionObj.options.forEach((option) => {
        const p = document.createElement("p");
        p.textContent = option;
        p.id = option;
        p.style.border = "1px solid white";
        p.style.padding = "4px";
        p.style.cursor = "pointer";

        p.addEventListener("click", () =>
          chooseOptionAndSubmit(option, widget, input)
        );
        p.addEventListener(
          "mouseover",
          () => (p.style.border = "1px solid blue")
        );
        p.addEventListener(
          "mouseout",
          () => (p.style.border = "1px solid white")
        );

        UI.options.appendChild(p);
      });
    }

    state.correctAnswer.textContent = `Answer: ${questionObj.answer}`;
  } else {
    UI.options.innerHTML = "";
    switch (widget) {
      case "post-it":
        UI.popupQuestion.innerHTML = "Post-it";
        UI.options.innerHTML =
          "Adormeceste outra vez na aula? Tranquei-te na sala até conseguires aprender a materia toda.<br>Tens 15 minutos até ao exame.<br>Boa sorte!<br><br>    Assinado: O teu melhor amigo.";
        break;
      case "door":
        if (
          items.keys.n1 == "available" &&
          items.keys.n2 == "available" &&
          items.keys.n3 == "available"
        ) {
          closePopup();
          const stats = {
            wrongAnswers: state.wrong,
            timeLeft: (time.totalSeconds / 60 - 0.2).toFixed(2),
          };
          localStorage.setItem("gameStats", JSON.stringify(stats));
          window.location.href = "./success.html";
        } else {
          UI.popupQuestion.innerHTML = "Ainda não tens todas as chaves!";
        }
        break;
      case "matrix":
        UI.popupQuestion.innerHTML = "matriz";
        UI.popupImage.setAttribute("src", "../../images/assets/matriz.png");
        break;
    }
  }
}

function chooseOptionAndSubmit(widget, elemento, input) {
  if (input) {
    if (
      widget === state.correctAnswer.textContent.split("Answer: ")[1].trim()
    ) {
      // Se a resposta estiver correta, mostrar um alerta de acerto após um atraso
      document.getElementById("pass-success").style.display = "flex";
      document.getElementById("pass-success").style.background = "#0e860a";
      document.getElementById("pass-success").textContent = "Correct";
      document
        .getElementById(elemento)
        .setAttribute("coords", "-1, -1, -1, -1");
      coordinatesArray[areaIds.indexOf(elemento)] = {
        left: -1,
        top: -1,
        right: -1,
        bottom: -1,
      };
      closePopup();
      setTimeout(function () {
        document.getElementById("pass-success").style.display = "none";
      }, 2000); // Defina o tempo de espera em milissegundos
      if (elemento == "safe") {
        document.getElementById("caixa_aberta").style.zIndex = 1;

        items.remote = "available";
        items.keys.n2 = "available";
        if (document.getElementById("item_1").style.backgroundImage == "") {
          document.getElementById("item_1").style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.two.style.backgroundImage =
            "url('../../images/assets/Items/Comando.png')";
        } else if (itemsN.two.style.backgroundImage == "") {
          itemsN.two.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.three.style.backgroundImage =
            "url('../../images/assets/Items/Comando.png')";
        } else if (itemsN.three.style.backgroundImage == "") {
          itemsN.three.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.four.style.backgroundImage =
            "url('../../images/assets/Items/Comando.png')";
        } else {
          itemsN.four.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          document.getElementById("item_1").style.backgroundImage =
            "url('../../images/assets/Items/Comando.png')";
        }
      } else if (elemento == "lock") {
        items.RCA_cable = "available";
        items.keys.n1 = "available";
        document.getElementById("armario_aberto").style.zIndex = 1;
        document
          .getElementById(elemento)
          .setAttribute("coords", "-1, -1, -1, -1");
        if (document.getElementById("item_1").style.backgroundImage == "") {
          document.getElementById("item_1").style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.two.style.backgroundImage =
            "url('../../images/assets/Items/RCA.png')";
        } else if (itemsN.two.style.backgroundImage == "") {
          itemsN.two.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.three.style.backgroundImage =
            "url('../../images/assets/Items/RCA.png')";
        } else if (itemsN.three.style.backgroundImage == "") {
          itemsN.three.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          itemsN.four.style.backgroundImage =
            "url('../../images/assets/Items/RCA.png')";
        } else {
          itemsN.four.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
          document.getElementById("item_1").style.backgroundImage =
            "url('../../images/assets/Items/RCA.png')";
        }
      } else if (elemento == "symbolLock") {
        items.keys.n3 = "available";
        document
          .getElementById(elemento)
          .setAttribute("coords", "-1, -1, -1, -1");
        if (document.getElementById("item_1").style.backgroundImage == "") {
          document.getElementById("item_1").style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
        } else if (itemsN.two.style.backgroundImage == "") {
          itemsN.two.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
        } else if (itemsN.three.style.backgroundImage == "") {
          itemsN.three.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
        } else {
          itemsN.four.style.backgroundImage =
            "url('../../images/assets/Items/chave.png')";
        }
      }
    } else {
      document.getElementById("pass-success").style.display = "flex";
      document.getElementById("pass-success").style.background = "#7A090E";
      document.getElementById("pass-success").style.cursor = "default";
      document.getElementById("pass-success").textContent = "Wrong  -1 min";

      setTimeout(function () {
        document.getElementById("pass-success").style.display = "none";
      }, 2000); // Defina o tempo de espera em milissegundos
      time.tempoPerdido = 60;
      state.wrong++;
    }
  } else {
    const selectedAnswer = document.getElementById(widget).textContent;
    if (
      selectedAnswer.trim() ===
      state.correctAnswer.textContent.split("Answer: ")[1].trim()
    ) {
      document.getElementById(widget).style.border = "1px solid green";
      document.getElementById(widget).style.background = "#c2ffcb";
      let old_element = document.getElementById(widget);
      let new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
      // Se a resposta estiver correta, mostrar um alerta de acerto após um atraso
      document.getElementById("pass-success").style.display = "flex";
      document.getElementById("pass-success").style.background = "#0e860a";
      document.getElementById("pass-success").textContent = "Correct";
      document
        .getElementById(elemento)
        .setAttribute("coords", "-1, -1, -1, -1");
      coordinatesArray[areaIds.indexOf(elemento)] = {
        left: -1,
        top: -1,
        right: -1,
        bottom: -1,
      };
      closePopup();

      setTimeout(function () {
        document.getElementById("pass-success").style.display = "none";
      }, 2000); // Defina o tempo de espera em milissegundos
      if (elemento == "TV") {
        document.getElementById("televisao_olho").style.zIndex = 1;
        hint1.style.display = "block";
        hint1.style.zIndex = "1";
      } else if (elemento == "monitor") {
        hint2.style.display = "block";
        hint2.style.zIndex = "1";
      }
    } else {
      document.getElementById("pass-success").style.display = "flex";
      document.getElementById("pass-success").style.background = "#7A090E";
      document.getElementById("pass-success").style.cursor = "default";
      document.getElementById("pass-success").textContent = "Wrong  -1 min";

      setTimeout(function () {
        document.getElementById("pass-success").style.display = "none";
      }, 2000); // Defina o tempo de espera em milissegundos
      document.getElementById(widget).style.border = "1px solid red";
      document.getElementById(widget).style.background = "#ffc2c7";
      let old_element = document.getElementById(widget);
      let new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
      time.tempoPerdido = 60;
    }
  }
}

function showBubble(clickedArea) {
  const index = clickableItems.indexOf(clickedArea) * 2;
  const top = coords_bubble[index + 1] * UI.height - 32;
  const left = coords_bubble[index] * UI.height - 32;

  UI.bubble.style.visibility = "visible";
  UI.bubble.style.top = `${parseInt(top)}px`;
  UI.bubble.style.left = `${parseInt(left)}px`;
}

function ghostBubble() {
  UI.bubble.style.visibility = "hidden";
}

function closePopup() {
  UI.popup.style.display = "none";
  UI.popup.style.pointerEvents = "none";
}

function responsiveClickAreas() {
  clickableItems.forEach((clickAreaID, index) => {
    const subject = subjects[index];
    const clickedElement = document.getElementById(clickAreaID);

    if (clickedElement) {
      if (clickedElement.id == "books") {
        clickedElement.addEventListener("click", () => {
          let cifraBooks = document.getElementById("cifraBooks");
          cifraBooks.style.display = "flex";
          document
            .getElementById("cifraBooksClose")
            .addEventListener("click", () => {
              cifraBooks.style.display = "none";
            });
        });
      } else if (clickedElement.id == "symbolLock") {
        clickedElement.addEventListener("click", () => {
          openPopup("symbolLock", "codigo", true);
        });
      } else {
        clickedElement.addEventListener("click", () => {
          openPopup(
            clickAreaID,
            subject,
            ["Matematica_II", "Sistemas", "Algoritmia"].includes(subject)
          );
        });
      }

      clickedElement.addEventListener("mouseenter", () =>
        showBubble(clickAreaID)
      );
      clickedElement.addEventListener("mouseleave", ghostBubble);
    } else {
      console.error(`Element with ID '${clickAreaID}' not found.`);
    }
  });
}

function createClickAreas() {
  UI.coordMap.innerHTML = "";
  // Dynamically create and append area elements
  hint1.style.top = `${hint1Coords[0] * UI.height}px`;
  hint1.style.left = `${hint1Coords[1] * UI.height}px`;
  hint2.style.top = `${hint2Coords[0] * UI.height}px`;
  hint2.style.left = `${hint2Coords[1] * UI.height}px`;
  coordinatesArray.forEach((coords, index) => {
    const area = document.createElement("area");
    area.setAttribute("shape", "rect");
    area.setAttribute(
      "coords",
      `${coords.left * UI.height},${coords.top * UI.height},${
        coords.right * UI.height
      },${coords.bottom * UI.height}`
    );
    area.setAttribute("alt", areaIds[index]);
    area.setAttribute("id", areaIds[index]);
    area.setAttribute("nohref", "");
    UI.coordMap.appendChild(area);
  });

  responsiveClickAreas();
}

const pageOneText = document.getElementById("pageOneText");
const pageTwoText = document.getElementById("pageTwoText");
pageOneText.innerText = manualText[0];
pageTwoText.innerText = manualText[1];
let paginAberta = 0;

function folheate(direcao) {
  if (direcao == "mais" && paginAberta != manualText.length - 2) {
    paginAberta += 2;
    pageOneText.innerText = manualText[paginAberta];
    pageTwoText.innerText = manualText[paginAberta + 1];
  } else if (direcao == "menos" && paginAberta != 0) {
    paginAberta -= 2;
    pageOneText.innerText = manualText[paginAberta];
    pageTwoText.innerText = manualText[paginAberta + 1];
  }
}

function cifraFolheate(direcao) {
  if (direcao == "mais" && cifraBook.currentPage != paginasCifra.length - 2) {
    cifraBook.currentPage += 2;
    pageOneCifra.style.backgroundImage = `url('${
      paginasCifra[cifraBook.currentPage]
    }')`;
    pageTwoCifra.style.backgroundImage = `url('${
      paginasCifra[cifraBook.currentPage + 1]
    }')`;
    document.getElementById("pageOneNum").innerText = cifraBook.currentPage;
    document.getElementById("pageTwoNum").innerText = cifraBook.currentPage + 1;
  } else if (direcao == "menos" && cifraBook.currentPage != 0) {
    cifraBook.currentPage -= 2;
    pageOneCifra.style.backgroundImage = `url('${
      paginasCifra[cifraBook.currentPage]
    }')`;
    pageTwoCifra.style.backgroundImage = `url('${
      paginasCifra[cifraBook.currentPage + 1]
    }')`;
    document.getElementById("pageOneNum").innerText = cifraBook.currentPage;
    document.getElementById("pageTwoNum").innerText = cifraBook.currentPage + 1;
  }
}

function openManual() {
  document.getElementById("manual").style.display = "flex";
}
function closeManual() {
  document.getElementById("manual").style.display = "none";
}

openPopup("post-it", "", false);

window.onload = () => responsiveClickAreas();
window.onload = () => createClickAreas();

cifraBook.pageOne.style.backgroundImage = `url('${paginasCifra[0]}')`;
cifraBook.pageTwo.style.backgroundImage = `url('${paginasCifra[1]}')`;

pageOneCifra.addEventListener("click", () => {
  cifraFolheate("menos");
});
pageTwoCifra.addEventListener("click", () => {
  cifraFolheate("mais");
});

window.addEventListener(
  //Quando redimencionamos a janela as area sao recriadas nas coordenadas certas
  "resize",
  () => {
    (UI.height = window.innerHeight / 1080), createClickAreas();
  },
  true
);

UI.closePopup.addEventListener("click", () => {
  closePopup();
});

manual.icon.addEventListener("click", openManual);
manual.closeBtn.addEventListener("click", closeManual);
manual.pageOne.addEventListener("click", () => {
  folheate("menos");
});
manual.pageTwo.addEventListener("click", () => {
  folheate("mais");
});
