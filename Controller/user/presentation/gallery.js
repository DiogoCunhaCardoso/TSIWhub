let slideImages = document.querySelectorAll("img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot");

var counter = 0;
var deletInterval = null; // Initialize the interval ID to null

next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
}

prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
}

// Auto sliding
function autoSliding() {
  if (deletInterval === null) {
    // Only set the interval if it's not already set
    deletInterval = setInterval(timer, 5000);
    function timer() {
      slideNext();
    }
  }
}

autoSliding();

//Stop auto sliding when mouse hover
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", stopAutoSliding);
container.addEventListener("mouseout", autoSliding);

function stopAutoSliding() {
  clearInterval(deletInterval);
  deletInterval = null; // Reset the interval ID to null
}

function scrollGallery(direction) {
  const gallery = document.querySelector(".gallery2-container");
  const scrollAmount = direction === "left" ? -300 : 300;
  gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
