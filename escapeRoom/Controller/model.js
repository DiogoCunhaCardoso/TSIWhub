export const questions = {
  Algoritmia: {
    question1: {
      variant1: {
        x: 10,
        y: 10,
        subtrair: 15,
        answer: 25,
      },
      variant2: {
        x: 5,
        y: 5,
        subtrair: 15,
        answer: 5,
      },
      variant3: {
        x: 10,
        y: 5,
        subtrair: 5,
        answer: 20,
      },
      variant4: {
        x: 25,
        y: 5,
        subtrair: 10,
        answer: 30,
      },

      text: `x = x\ny = y\ndef funcao():\n  global x\n  x += 2 * y\n    y += 3 * x\nfuncao()\nprint(x + y - subtrair)`,
    },
  },
  Sistemas: {
    question1: {
      text: `Converte (x) de binário para décimal`,
      variant1: {
        x: "11001011",
        answer: "203",
      },
      variant2: {
        x: "01101101",
        answer: "109",
      },
      variant3: {
        x: "11100010",
        answer: "226",
      },
      variant4: {
        x: "01100110",
        answer: "102",
      },
      variant5: {
        x: "10001111",
        answer: "143",
      },
    },
    question2: {
      text: `Converte (x) de hexadécimal para décimal`,
      variant1: {
        x: "A4",
        answer: "164",
      },
      variant2: {
        x: "B0",
        answer: "176",
      },
      variant3: {
        x: "100",
        answer: "256",
      },
      variant4: {
        x: "7A",
        answer: "122",
      },
      variant5: {
        x: "FF",
        answer: "255",
      },
    },
  },
  Tecnologias_Web: {
    question1: {
      text: "Quero por o meu website bonito. O que uso?",
      variant1: {
        options: ["HTML", "CSS", "JavaScript"],
        answer: "CSS",
      },
    },
    question2: {
      text: "Como defino um comentário em CSS?",
      variant1: {
        options: ["<!--...--->", "#...", "/*...*/"],
        answer: "/*...*/",
      },
    },
    question3: {
      text: "Como defino um comentário em HTML?",
      variant1: {
        options: ["<!--...--->", "#...", "/*...*/"],
        answer: "<!--...--->",
      },
    },
  },
  Multimedia: {
    question1: {
      variant1: {
        options: ["90 -45 45", "-45 45 0", "0-90 0", "45 -45 -45"],
        answer: "-45 45 0",
      },
      text: "Para ver o olho de frente que rotações seria preciso fazer?",
    },
  },
  Matematica_II: {
    question1: {
      text: "",
      variant1: {
        matrix: [
          [1, 0, 4],
          [5, 9, 3],
          [7, 2, 4],
          [8, 6, 2],
        ],
        answer: "",
      },
    },
  },
};

let matrix_quest = questions.Matematica_II.question1;
let mat_vars = [
  Math.floor(Math.random() * 4),
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 4),
  Math.floor(Math.random() * 3),
  Math.floor(Math.random() * 4),
  Math.floor(Math.random() * 3),
];
matrix_quest.text = `M${subscriptMap(mat_vars[0] + 1)} ${subscriptMap(
  mat_vars[1] + 1
)} | M${subscriptMap(mat_vars[2] + 1)} ${subscriptMap(
  mat_vars[3] + 1
)} | M${subscriptMap(mat_vars[4] + 1)} ${subscriptMap(mat_vars[5] + 1)}`;
matrix_quest.variant1.answer = `${
  matrix_quest.variant1.matrix[mat_vars[0]][mat_vars[1]]
}${matrix_quest.variant1.matrix[mat_vars[2]][mat_vars[3]]}${
  matrix_quest.variant1.matrix[mat_vars[4]][mat_vars[5]]
}`;

function subscriptMap(num) {
  switch (num) {
    case 1:
      return "₁";
    case 2:
      return "₂";
    case 3:
      return "₃";
    case 4:
      return "₄";
  }
}

export let page = [
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 10),
];

export let simbolosRandom = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];

export let cifraCerta = parseInt(`${page[0]}${page[1]}`) % 5;

export let cifraCertaSimbolos = [
  [
    "&#x2295;",
    "&#x2211;",
    "&#x2208;",
    "&#x2205;",
    "&#x2200;",
    "&#x222A;",
    "&#x222B;",
    "&#x220F;",
    "&#x2206;",
    "&#x2203;",
  ],
  [
    "&#x2200;",
    "&#x2205;",
    "&#x2208;",
    "&#x2211;",
    "&#x2295;",
    "&#x2203;",
    "&#x2206;",
    "&#x220F;",
    "&#x222B;",
    "&#x222A;",
  ],
  [
    "&#x2203;",
    "&#x2206;",
    "&#x220F;",
    "&#x222B;",
    "&#x222A;",
    "&#x2200;",
    "&#x2205;",
    "&#x2208;",
    "&#x2211;",
    "&#x2295;",
  ],
  [
    "&#x2203;",
    "&#x2206;",
    "&#x220F;",
    "&#x222B;",
    "&#x222A;",
    "&#x2208;",
    "&#x2211;",
    "&#x2295;",
    "&#x2200;",
    "&#x2205;",
  ],
  [
    "&#x2203;",
    "&#x2206;",
    "&#x220F;",
    "&#x2200;",
    "&#x2205;",
    "&#x2208;",
    "&#x2211;",
    "&#x2295;",
    "&#x222B;",
    "&#x222A;",
  ],
];

export let paginasCifra = [
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
  "../../images/assets/cifra0.png",
  "../../images/assets/cifra1.png",
  "../../images/assets/cifra2.png",
  "../../images/assets/cifra3.png",
  "../../images/assets/cifra4.png",
];

export let items = {
  keys: {
    n1: "unavailable",
    n2: "unavailable",
    n3: "unavailable",
  },
  RCA_cable: "unavailable",
  remote: "unavailable",
};

export let clickableItems = [
  "lock",
  "books",
  "TV",
  "post-it",
  "monitor",
  "matrix",
  "symbolLock",
  "safe",
  "door",
];

export const coords_bubble = [
  610, 950, 310, 660, 460, 560, 920, 445, 880, 445, 500, 160, 1100, 410, 900,
  245, 1510, 130, 260, 530,
];

export const scaleFactor = window.innerHeight / 1080;

export const subjects = [
  "Matematica_II",
  "",
  "Multimedia",
  "",
  "Tecnologias_Web",
  "",
  "",
  "Sistemas",
  "",
];

export const time = {
  timerInterval: 0,
  totalSeconds: 15 * 60,
  tempoPerdido: 0,
};

export const manualText = [
  "Página 1\n\n\n\n Manual Agoritmia: \n\n    Para definir uma variável usamos a seguinte estrutura:\n\n      nome_da_variável = valor_da_variável\n\n    Para definir uma função usamos a seguinte estrutura:\n\n      def nome_da_funcao():\n        #este código está dentro da função\n\n    Código dentro da definição da função não é executado.\n    Só quando chamarmos a função é que o código executa.\n\n    Para chamarmos a função usamos apenas:\n\n      nome_da_funcao()\n\n    A keyword global indica que as variáveis escritas à frente \n    são alteradas no âmbito global. Outras variáveis são alteradas\n    apenas localmente.",
  "Página 2\n\n\n\n Manual Sistemas: \n\n    Para converter um número binário para decimal, deve-se multiplicar \n    cada dígito do número binário por 2 elevado à posição desse dígito, \n    contando da direita para a esquerda, começando por elevar a 0.\n    De seguida, some todos os valores obtidos:\n\n      10011 = 1* 2^0 + 1* 2^1 + 0* 2^2 + 0* 2^3 + 1* 2^4 = 1 + 2 + 0 + 0 + 16 = 19\n\n    Para converter um número hexadecimal para decimal, deve-se multiplicar cada dígito \n    do número hexadecimal por 16 elevado à posição desse dígito, \n    contando da direita para a esquerda, começando por elevar a 0.\n    De seguida, some todos os valores obtidos.\n    A escala em hexadécimal é um pouco diferente começando no 0 e acabando no F.\n    A partir do 9 para a frente, A=10, B=11, C=12, D=13, E=14, F=15\n\n      F4 = 4* 16^0 + F(15)* 16^1 = 4 + 240 = 244",
  "Página 3\n\n\n\n Manual Tecnologias Web: \n\n    Para estilizar um website e torná-lo visualmente atraente,\n    usamos CSS (Cascading Style Sheets), HTML é usado para estruturar conteúdo\n    e JavaScript para a interação dinâmica.\n\n    Para definir um comentário em CSS, utilizamos:\n\n      /* comentário */\n\n    Para definir um comentário em HTML, utilizamos\n\n      <!--comentário-->\n\n    Para definir um comentário em JavaScript, utilizamos\n\n      //comentário",
  "Página 4\n\n\n\n Manual Multimedia: \n\n    Para rodarmos um objeto num espaço tridimensional, precisamos de \n    realizar rotações específicas em três eixos: X, Y e Z\n    O eixo X é horizontal, o Y é vertical e o Z é perpendicular ao ponto de vista.",
  "Página 5\n\n\n\n Manual Matemática II : \n\n    Para encontrar um elemento numa matriz a partir das coordenadas fornecidas,\n    é importante entender como as coordenadas funcionam.\n    As matrizes são estruturadas em linhas e colunas.\n    As coordenadas são normalmente fornecidas no formato Mi j,\n    onde M representa o nome da matriz, i representa a linha e j representa a coluna.\n    As linhas são numeradas de cima para baixo, começando do 1.\n    As colunas são numeradas da esquerda para a direita, começando também do 1.",
  "FIM",
];

export const manual = {
  pageOne: document.getElementById("pageOne"),
  pageTwo: document.getElementById("pageTwo"),
  icon: document.getElementById("manualIcon"),
  closeBtn: document.getElementById("manualClose"),
};

export const cifraBook = {
  currentPage: 0,
  pageOne: document.getElementById("pageOneCifra"),
  pageTwo: document.getElementById("pageTwoCifra"),
};

export const UI = {
  height: window.innerHeight / 1080,
  popup: document.getElementById("popup"),
  popupQuestion: document.getElementById("question"),
  popupImage: document.getElementById("imagem"),
  options: document.getElementById("options"),
  closePopup: document.getElementById("close"),
  bubble: document.getElementById("bubble"),
  coordMap: document.getElementById("mapa"),
};

export const state = {
  currentSubj: null,
  correctAnswer: document.getElementById("answer"),
  wrong: 0,
  //selectedAnswer:
};
