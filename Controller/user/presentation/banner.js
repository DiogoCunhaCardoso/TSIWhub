import { images as imagesModel } from "../../../Model/images.js";

const imagesLS = JSON.parse(
  localStorage.getItem("images") || JSON.stringify(imagesModel)
);

const bannerSlider = document.getElementById("bannerSlider");
const circleContainer = document.getElementById("circleContainer");
const selColor = "bg-black";
const nonSelColor = "bg-gray-200";

// Create circles
function createCircles(numCircles) {
  let circlesHTML = "";
  for (let i = 0; i < numCircles; i++) {
    circlesHTML += `<div class="w-3 h-3 rounded-full mx-2 ${nonSelColor}"></div>`;
  }
  circleContainer.innerHTML = circlesHTML;
}

// Update circle color position
function updateCircles(currentIndex) {
  const circles = circleContainer.children;
  for (let i = 0; i < circles.length; i++) {
    if (i === currentIndex) {
      circles[i].classList.add(`${selColor}`);
      circles[i].classList.remove(`${nonSelColor}`);
    } else {
      circles[i].classList.add(`${nonSelColor}`);
      circles[i].classList.remove(`${selColor}`);
    }
  }
}

// Banner Delay Change
function changeBannerImage(images) {
  let currentIndex = 0;
  const numImages = images.length;

  createCircles(numImages);
  updateCircles(currentIndex);

  setInterval(() => {
    bannerSlider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % numImages;
    updateCircles(currentIndex);
  }, 3000);
}

// Initialize banner slider
changeBannerImage(imagesLS.banner);
