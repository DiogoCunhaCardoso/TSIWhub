import { events as eventsModel } from "../../../Model/events.js";

const eventsLS = JSON.parse(
  localStorage.getItem("events") || JSON.stringify(eventsModel)
);

const eventsContainer = document.getElementById("allEvents");

// Function to create the HTML for an event card
function createEventCard(event) {
  return `
    <div class="event-card bg-white p-4 rounded shadow-md transition-transform transform group hover:scale-[1.01] cursor-pointer" data-id="${event.id}">
      <h3 class="event-title text-base font-bold mt-4 text-center h-20">${event.title}</h3>
      <div class="w-full h-60 relative">
        <img src="${event.image}" alt="${event.title}" class="event-image absolute top-0 left-0 w-full h-full object-cover rounded-lg aspect-square">
      </div>
    </div>
  `;
}

function handelDynamicCardClick(event) {
  const eventId = event.currentTarget.getAttribute("data-id");
  window.location.href = `user/events.html?id=${eventId}`;
}

// Add event listeners to each event card
function addEventListeners() {
  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card) => {
    card.addEventListener("click", handelDynamicCardClick);
  });
}

// Populate eventsContainer with event cards
function populateEventsContainer() {
  eventsContainer.innerHTML = "";
  eventsLS.forEach((event) => {
    const eventCardHTML = createEventCard(event);
    eventsContainer.innerHTML += eventCardHTML;
  });
}

populateEventsContainer();
addEventListeners();
