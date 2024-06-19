import { images as imagesModel } from "../../../Model/images.js";

const imagesLS = JSON.parse(
  localStorage.getItem("images") || JSON.stringify(imagesModel)
);

const galleryContainer = document.getElementById("allGallery");

function createGalleryImage(imageSrc) {
  return `
    <div class="relative w-60 h-60 flex-shrink-0 shadow-lg">
      <img src="${imageSrc}" alt="Gallery Image" class="w-full h-full object-cover rounded-lg">
    </div>
  `;
}

galleryContainer.innerHTML = "";

imagesLS.gallery.forEach((imageSrc) => {
  const galleryImageHTML = createGalleryImage(imageSrc);
  galleryContainer.innerHTML += galleryImageHTML;
});
