const images = JSON.parse(localStorage.getItem("images"));

// GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery2-container");
  const images = JSON.parse(localStorage.getItem("images")) || {};
  const galleryImages = images.gallery || [];

  galleryImages.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.classList.add("gallery2-item", "rounded-lg", "shadow-lg");
    img.src = imageSrc;
    galleryContainer.appendChild(img);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = card.getAttribute("data-href");
    });
  });
});
