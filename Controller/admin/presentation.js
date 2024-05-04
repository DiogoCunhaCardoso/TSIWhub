// ADD TO BANNER
// Changes current banner image
document
  .getElementById("bannerUpload")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("bannerImage").src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

// ADD TO GALLERY
// Can add multiple files
document
  .getElementById("galleryUpload")
  .addEventListener("change", function (e) {
    const files = e.target.files;
    const galleryContainer = document.getElementById("wholeGallery");

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
      };

      reader.readAsDataURL(file);
    }
  });
