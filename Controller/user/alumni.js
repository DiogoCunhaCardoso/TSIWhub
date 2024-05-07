import { alumni as alumniModel } from "../../Model/alumni.js";

const alumnusLS = JSON.parse(
  localStorage.getItem("alumnus") ||
    localStorage.setItem("alumnus", JSON.stringify(alumniModel))
);

// Function to handle click event on info cards
function updateMainCard(index) {
  const { image, name, date, description } = alumnusLS[index];
  const mainImage = document.getElementById("mainImage");
  const mainName = document.getElementById("mainName");
  const mainDate = document.getElementById("mainDate");
  const mainDescription = document.getElementById("mainDescription");

  mainImage.setAttribute("src", image);
  mainName.innerText = name;
  mainDate.innerText = `Término do curso: ${date}`;
  mainDescription.innerText = description;
}

document.querySelectorAll(".info-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    // Remove border from all cards
    document.querySelectorAll(".info-card img").forEach((img) => {
      img.classList.remove("border", "border-violet-500");
    });
    // Add border to clicked card's image
    card.querySelector("img").classList.add("border", "border-violet-500");
    // Update content in the main card
    updateMainCard(index);
  });
});

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
alumnusLS.forEach((alumnus, index) => {
  const card = createInfoCard(alumnus);
  card.addEventListener("click", () => {
    // Remove border from all cards
    document.querySelectorAll(".info-card").forEach((card) => {
      card.classList.remove("border", "border-violet-500");
    });
    // Add border to clicked card
    card.classList.add("border", "border-violet-500");
    // Update content in the main card
    updateMainCard(index);
  });
  infoCardsContainer.appendChild(card);
});

// Initialize the first card as selected by default
document
  .querySelector(".info-card")
  .classList.add("border", "border-violet-500");
updateMainCard(0);
