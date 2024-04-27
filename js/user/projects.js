// Function to handle carousel functionality
function initializeCarousel() {
  const carousel = document.querySelector('[data-carousel="slide"]');
  const items = Array.from(carousel.querySelectorAll("[data-carousel-item]"));
  let currentIndex = 0;

  // Function to show the current item
  function showCurrentItem() {
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }
  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    showCurrentItem();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCurrentItem();
  }

  // ON CLICKS

  carousel
    .querySelector("[data-carousel-next]")
    .addEventListener("click", showNext);

  carousel
    .querySelector("[data-carousel-prev]")
    .addEventListener("click", showPrev);

  // Show the initial item
  showCurrentItem();
}

// Initialize the carousel when the document is loaded
document.addEventListener("DOMContentLoaded", initializeCarousel);
