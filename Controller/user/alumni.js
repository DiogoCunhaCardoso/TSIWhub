import { alumni } from "../../Model/alumni.js";

// Function to handle click event on info cards
document.querySelectorAll(".info-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    // Remove border from all cards
    document.querySelectorAll(".info-card img").forEach((img) => {
      img.classList.remove("border", "border-violet-500");
    });
    // Add border to clicked card's image
    card.querySelector("img").classList.add("border", "border-violet-500");
    // Update content in the main card
    const mainCard = document.querySelector("main > a");
    const { image, name, date, description } = alumni[index];
    mainCard.querySelector("img").setAttribute("src", image);
    mainCard.querySelector("h5").innerText = name;
    mainCard.querySelector(
      "p:first-of-type"
    ).innerText = `Término do curso: ${date}`;
    mainCard.querySelector("p:nth-of-type(2)").innerText = description;
  });
});

//
//
// Smaller Cards

// Function to create an info card element
function createInfoCard(alumnus) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "info-card",
    "bg-gray-100",
    "w-40",
    "rounded-lg",
    "hover:shadow-md",
    "transition"
  );

  const img = document.createElement("img");
  img.classList.add("w-16", "h-16", "object-cover", "rounded-full");
  img.src = alumnus.image;

  const name = document.createElement("h5");
  name.classList.add("mt-2", "text-lg", "font-semibold");
  name.textContent = alumnus.name;

  const date = document.createElement("p");
  date.classList.add("text-gray-600", "text-xs");
  date.textContent = alumnus.date;

  cardDiv.appendChild(img);
  cardDiv.appendChild(name);
  cardDiv.appendChild(date);

  return cardDiv;
}

// Populate smaller cards
const infoCardsContainer = document.getElementById("allCards");
alumni.forEach((alumnus, index) => {
  const card = createInfoCard(alumnus);
  card.addEventListener("click", () => {
    // Remove border from all cards
    document.querySelectorAll(".info-card").forEach((card) => {
      card.classList.remove("border", "border-violet-500");
    });
    // Add border to clicked card
    card.classList.add("border", "border-violet-500");
    // Update content in the main card
    const mainCard = document.querySelector("main > a");
    mainCard.querySelector("img").setAttribute("src", alumnus.image);
    mainCard.querySelector("h5").innerText = alumnus.name;
    mainCard.querySelector(
      "p:first-of-type"
    ).innerText = `Término do curso: ${alumnus.date}`;
    mainCard.querySelector("p:nth-of-type(2)").innerText = "Testemunho";
    mainCard.querySelector("p:nth-of-type(3)").innerText = alumnus.description;
  });
  infoCardsContainer.appendChild(card);
});

// Initialize the first card as selected by default
document
  .querySelector(".info-card")
  .classList.add("border", "border-violet-500");

//
//
// Initialize the first card as selected by default
document
  .querySelector(".info-card")
  .classList.add("border", "border-violet-500");
const mainCard = document.querySelector("main > a");
const { image, name, date, description } = alumni[0];
mainCard.querySelector("img").setAttribute("src", image);
mainCard.querySelector("h5").innerText = name;
mainCard.querySelector(
  "p:first-of-type"
).innerText = `Término do curso: ${date}`;
mainCard.querySelector("p:nth-of-type(2)").innerText = description;