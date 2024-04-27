import {
  questions,
  items,
  objects,
  coords_bubble,
  time,
  subjects,
} from "./model.js";

function getRandomQuestionFromSubject(subject) {
  // Check if the subject exists
  if (questions.hasOwnProperty(subject)) {
    // Get the object containing questions for the subject
    const subjectQuestions = questions[subject];

    // Get the keys (question identifiers) from the subject object
    const questionKeys = Object.keys(subjectQuestions);

    // Check if there are questions in the array
    if (questionKeys.length > 0) {
      // Generate a random index to select a question
      const randomIndexQuestion = Math.floor(
        Math.random() * questionKeys.length
      );

      // Get the randomly selected question using the random key
      const randomQuestionKey = questionKeys[randomIndexQuestion];
      const randomQuestion = subjectQuestions[randomQuestionKey];

      // Get the keys (variant identifiers) from the selected question object
      const variantKeys = Object.keys(randomQuestion);

      // Remove the 'text' key from the variantKeys array
      const indexText = variantKeys.indexOf("text");
      if (indexText !== -1) {
        variantKeys.splice(indexText, 1);
      }

      // Generate a random index to select a variant
      const randomIndexVariant = Math.floor(Math.random() * variantKeys.length);

      // Get the randomly selected variant using the random key
      const randomVariantKey = variantKeys[randomIndexVariant];
      const randomVariant = randomQuestion[randomVariantKey];

      // Construct an object containing the question text and options
      const selectedQuestion = {
        question: randomQuestion.text,
        options: randomVariant.options,
        answer: randomVariant.answer,
      };

      // Return the selected question object
      return selectedQuestion;
    } else {
      console.log(`No questions found for ${subject}`);
    }
  } else {
    console.log(`Subject ${subject} not found`);
  }
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
  popup.style.pointerEvents = "none";
}
let currentSubject; // Variável global para armazenar o assunto atual

export function openPopup(subj, input = false) {
  let popup = document.getElementById("popup");

  popup.style.display = "block";
  popup.style.pointerEvents = "auto";

  // Atualizar a variável global com o assunto atual
  currentSubject = subj;

  if (subj != "") {
    // Obter uma pergunta aleatória e suas opções
    const questionObj = getRandomQuestionFromSubject(subj);

    // Atualizar o texto da pergunta no popup
    document.getElementById("question").innerHTML = questionObj.question;

    // Atualizar as opções no popup
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Limpar opções anteriores

    if (input) {
      // If input is true, create one input element
      let inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.setAttribute("id", "optionInput");
      optionsDiv.appendChild(inputElement);
      inputElement.addEventListener("change", function () {
        chooseOptionAndSubmit(this.value);
      });
    } else {
      // If input is false, create p elements for each option
      questionObj.options.forEach((option) => {
        let p = document.createElement("p");
        p.textContent = option;
        p.setAttribute("id", String(option));
        p.onclick = function () {
          chooseOptionAndSubmit(this.id);
        };
        optionsDiv.appendChild(p);
      });
    }
    // Atualizar o texto da resposta no popup
    document.getElementById("answer").textContent = `Answer: ${String(
      questionObj.answer
    )}`;
  } //else {
  //  switch (widget) {
  //      case ("matrix"):
  //          break;
  //      case ("post-it"):
  //          break;
  //      case ("door"):
  //          break;
  //      default:
  //          break;
  //  }
  //}
}
//function chooseOptionAndSubmit(){
//    //escolher paragrafo dentro da div options
//    let optionsDiv = document.getElementById("options");
//    //ver qual dentro da div foi clicado
//    //meter uma border red á volta do paragrafo
//    //se paragrafo já selecionado tirar borda senao meter borda
//    //verificar se o paragrafo selecioado .innerHTML == questionObj.answer
//    // se for alert acertou senao alert errou
//    //tirar a answer da funçao open popup
//}
function chooseOptionAndSubmit(widget) {
  // Obter a div de opções
  let optionsDiv = document.getElementById("options");

  // Obter todos os parágrafos dentro da div de opções
  let optionParagraphs = optionsDiv.querySelectorAll("p");

  // Iterar sobre cada parágrafo e adicionar ou remover a borda vermelha
  optionParagraphs.forEach((option) => {
    // Remover a borda vermelha de todos os parágrafos
    option.style.border = "none";
  });

  // Adicionar uma borda vermelha ao parágrafo clicado
  document.getElementById(widget).style.border = "1px solid red";

  // Verificar se o parágrafo clicado corresponde à resposta
  const selectedAnswer = document.getElementById(widget).textContent;
  const answer = document
    .getElementById("answer")
    .textContent.split("Answer: ");

  if (selectedAnswer.trim() === answer[1].trim()) {
    // Se a resposta estiver correta, mostrar um alerta de acerto após um atraso
    setTimeout(function () {
      alert("Correct!");
      closePopup();
    }, 200); // Defina o tempo de espera em milissegundos (1000 ms = 1 segundo)
  } else {
    // Se a resposta estiver incorreta, mostrar um alerta de erro após um atraso
    setTimeout(function () {
      alert("Incorrect!");
      time.tempoPerdido += 60;
    }, 200); // Defina o tempo de espera em milissegundos (1000 ms = 1 segundo)
  }
}

function showBubble(widget) {
  const obj = document.getElementById("bubble");

  obj.style.visibility = "visible";
  console.log(coords_bubble[objects.indexOf(widget) * 2 + 1]);
  obj.style.top = `${coords_bubble[objects.indexOf(widget) * 2 + 1] - 32}px`;
  obj.style.left = `${coords_bubble[objects.indexOf(widget) * 2] - 32}px`;
}

// PARA POSICOES RELATIVAS MUDAR AQUI

/* function showBubble(widget) {
  const obj = document.getElementById("bubble");
  const vwWidth = window.innerWidth;
  const vwHeight = window.innerHeight;

  obj.style.visibility = "visible";
  const index = objects.indexOf(widget);
  const xCoord = (coords_bubble[index * 2] / vwWidth) * 100;
  const yCoord = (coords_bubble[index * 2 + 1] / vwHeight) * 100;

  obj.style.top = `${yCoord}vh`;
  obj.style.left = `${xCoord}vw`;
} */

function ghostBubble() {
  document.getElementById("bubble").style.visibility = "hidden";
}

//
//
//
//activate on clicks, mouseenter and mouseleave

for (let i = 0; i < objects.length; i++) {
  const objectId = objects[i];
  const subject = subjects[i];
  const element = document.getElementById(objectId);

  if (element) {
    element.addEventListener("click", function () {
      openPopup(
        subject,
        subject === "Matematica_II" ||
          subject === "Sistemas" ||
          subject === "Algoritmia"
      );
    });
    element.addEventListener("mouseenter", function () {
      showBubble(objectId);
    });
    element.addEventListener("mouseleave", function () {
      ghostBubble();
    });
  } else {
    console.error(`Element with ID '${objectId}' not found.`);
  }
}

document.getElementById("close").addEventListener("click", function () {
  closePopup();
});
