const images = JSON.parse(localStorage.getItem("images"));

// BANNER
const bannerImageUrl = images && images.banner ? images.banner : "";
const bannerImage = document.getElementById("bannerImage");

bannerImage.src = bannerImageUrl;

// GALLERY
const galleryImages = images && images.gallery ? images.gallery : [];
const galleryContainer = document.getElementById("wholeGallery");

galleryImages.forEach((imageUrl) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("rounded-lg", "shadow-md", "object-cover", "w-48", "h-48");
  galleryContainer.appendChild(img);
});
