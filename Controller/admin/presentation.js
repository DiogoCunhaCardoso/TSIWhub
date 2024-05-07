const bannerImage = document.getElementById("bannerImage");
const galleryContainer = document.getElementById("wholeGallery");

// POPULATE IMAGES FROM LS - ONLOAD
document.addEventListener("DOMContentLoaded", () => {
  const imagesFromLS = JSON.parse(localStorage.getItem("images"));
  if (imagesFromLS && imagesFromLS.banner) {
    bannerImage.src = imagesFromLS.banner;
  }
  if (imagesFromLS && imagesFromLS.gallery) {
    imagesFromLS.gallery.forEach((imageData) => {
      const img = document.createElement("img");
      img.classList.add(
        "rounded-lg",
        "shadow-md",
        "object-cover",
        "w-48",
        "h-48"
      );
      img.src = imageData;
      galleryContainer.appendChild(img);
    });
  }
});

// ADD IMAGE - BANNER
document
  .getElementById("bannerUpload")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const images = JSON.parse(localStorage.getItem("images")) || {};
      images.banner = e.target.result;
      localStorage.setItem("images", JSON.stringify(images));
      bannerImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

// ADD IMAGES - GALLERY
document
  .getElementById("galleryUpload")
  .addEventListener("change", function (e) {
    const files = e.target.files;
    const images = JSON.parse(localStorage.getItem("images")) || {};
    const galleryImages = images.gallery || [];

    // Iterate through each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement("img");
        img.classList.add(
          "rounded-lg",
          "shadow-md",
          "object-cover",
          "w-48",
          "h-48"
        );
        img.src = e.target.result;
        galleryContainer.appendChild(img);
        galleryImages.push(e.target.result);
        images.gallery = galleryImages;
        localStorage.setItem("images", JSON.stringify(images));
      };

      reader.readAsDataURL(file);
    }
  });
