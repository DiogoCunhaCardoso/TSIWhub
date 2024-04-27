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
      variant1: {
        binario: "11001011",
        answer: "203",
      },
      variant2: {
        binario: "01101101",
        answer: "109",
      },
      variant3: {
        binario: "11100010",
        answer: "226",
      },
      variant4: {
        binario: "01100110",
        answer: "102",
      },
      variant5: {
        binario: "10001111",
        answer: "143",
      },
      text: `Convert binary binario to decimal`,
    },
    question2: {
      variant1: {
        hexadecimal: "A4",
        answer: "164",
      },
      variant2: {
        hexadecimal: "B0",
        answer: "176",
      },
      variant3: {
        hexadecimal: "100",
        answer: "256",
      },
      variant4: {
        hexadecimal: "7A",
        answer: "122",
      },
      variant5: {
        hexadecimal: "FF",
        answer: "255",
      },
      text: `Convert hexadecimal hexadecimal to decimal`,
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
      variant2: {
        options: ["a", "b", "c"],
        answer: "c",
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
      variant1: {
        matrix: [
          [1, 0, 4],
          [5, 9, 3],
          [7, 2, 4],
          [8, 6, 2],
        ],
        answer: "random, random, random",
      },
      text: "random, random, random",
    },
  },
};

export let items = {
  keys: {
    n1: "unavailable",
    n2: "unavailable",
    n3: "unavailable",
  },
  RCA_cable: "unavailable",
  remote: "unavailable",
};

export const objects = [
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
  10, 950, 310, 660, 460, 560, 920, 445, 880, 445, 500, 160, 1100, 410, 900,
  245, 255, 525, 1510, 130,
];

export const subjects = [
  "Matematica_II",
  "Algoritmia",
  "Multimedia",
  "",
  "Tecnologias_Web",
  "",
  "Sistemas",
  "Sistemas",
  "",
];

export const time = {
  timerInterval: 0,
  totalSeconds: 15 * 60,
  tempoPerdido: 0,
};
