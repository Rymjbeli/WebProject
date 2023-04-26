// Get DOM elements
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");
const stateInput = document.getElementById("state");
const cityInput = document.getElementById("city");
const categoryInput = document.getElementById("category");
const placeInput = document.getElementById("place");
const locationInput = document.getElementById("location");
const tagsInput = document.getElementById("tags");
const ratingInput = document.getElementById("rating");

const previewBtn = document.getElementById("preview-btn");
const previewModal = document.getElementById("preview-modal");

const previewTitle = document.getElementById("preview-title");
const previewImage = document.getElementById("preview-image");
const previewContent = document.getElementById("preview-content");
const previewState = document.getElementById("preview-state");
const previewCity = document.getElementById("preview-city");
const previewCategory = document.getElementById("preview-category");
const previewPlace = document.getElementById("preview-place");
const previewLocation = document.getElementById("preview-location");
const previewTags = document.getElementById("preview-tags");
const previewRating = document.getElementById("preview-rating");

const modalCloseBtn = document.querySelector(".close");

//image preview
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imagePreview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }

});

// Display modal window when "Preview" button is clicked
previewBtn.addEventListener("click", function () {
  previewTitle.textContent = titleInput.value;
  previewImage.src = imagePreview.src;
  previewContent.textContent = contentInput.value;
  previewCategory.textContent = categoryInput.value;
  previewState.textContent = stateInput.value;
  previewCity.textContent = cityInput.value;
  previewTags.textContent = tagsInput.value;
  previewLocation.textContent = locationInput.value;
  previewRating.textContent = ratingInput.value;

  previewModal.style.display = "block";
});

// Hide modal window when close button is clicked
modalCloseBtn.addEventListener("click", function () {
  previewModal.style.display = "none";
});

// Update preview every time the user types
titleInput.addEventListener("input", updatePreview);
contentInput.addEventListener("input", updatePreview);
categoryInput.addEventListener("input", updatePreview);
stateInput.addEventListener("input", updatePreview);
cityInput.addEventListener("input", updatePreview);
tagsInput.addEventListener("input", updatePreview);
imageInput.addEventListener("input", updatePreview);
locationInput.addEventListener("input", updatePreview);
ratingInput.addEventListener("input", updatePreview);

function updatePreview() {
  previewTitle.textContent = titleInput.value;
  previewContent.textContent = contentInput.value;
  previewCategory.textContent = categoryInput.value;
  previewState.textContent = stateInput.value;
  previewCity.textContent = cityInput.value;
  previewTags.textContent = tagsInput.value;
  previewImage.textContent = imageInput.value;
  previewLocation.textContent = locationInput.value;
  previewRating.textContent = ratingInput.value;
}

// Update character counter
const counter = document.getElementById("char-counter");
contentInput.addEventListener("input", function () {
  const inputLength = this.value.length;
  counter.textContent = inputLength + "/300";
});


