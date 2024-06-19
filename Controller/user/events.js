import { events as eventsModel } from "../../Model/events.js";
import { getUrlParams } from "../../Utils/getUrlParams.js";

const eventsLS = JSON.parse(
  localStorage.getItem("events") || JSON.stringify(eventsModel)
);

// Function to find event by ID
function findEventById(id) {
  return eventsLS.find((event) => event.id === parseInt(id));
}

// Function to create HTML for an event card
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

// Function to populate event details
function populateEventDetails(event) {
  document.getElementById("eventTitle").textContent = event.title;
  document.getElementById("eventSubtitle").textContent = event.subtitle;
  document.getElementById("eventImage").src = event.image;
  document.getElementById("eventDescription").textContent = event.description;
  document.getElementById("eventDate").textContent = event.date;
}

// GET NEXT 3 EVENTS
function findNextThreeEvents(currentIndex) {
  const nextIndex1 = (currentIndex + 1) % eventsLS.length;
  const nextIndex2 = (currentIndex + 2) % eventsLS.length;
  const nextIndex3 = (currentIndex + 3) % eventsLS.length;

  return [eventsLS[nextIndex1], eventsLS[nextIndex2], eventsLS[nextIndex3]];
}

function populateRelatedEvents(currentIndex) {
  const relatedEvents = findNextThreeEvents(currentIndex);
  const otherEventsContainer = document.getElementById("otherEventsContainer");

  const relatedEventsHTML = relatedEvents
    .map((event) => createEventCard(event))
    .join("");
  otherEventsContainer.innerHTML = relatedEventsHTML;

  addEventListeners();
}

function addEventListeners() {
  const eventCards = document.querySelectorAll(".event-card");
  eventCards.forEach((card) => {
    card.addEventListener("click", handelDynamicCardClick);
  });
}

function handelDynamicCardClick(event) {
  const eventId = event.currentTarget.getAttribute("data-id");
  window.location.href = `events.html?id=${eventId}`;
}

// Initialize the page
function initializePage() {
  const queryParams = getUrlParams();
  const eventId = queryParams.id;

  const event = findEventById(eventId);
  populateEventDetails(event);

  if (event) {
    const currentIndex = eventsLS.findIndex((e) => e.id === event.id);
    populateRelatedEvents(currentIndex);
  }
}
document.addEventListener("DOMContentLoaded", initializePage);
