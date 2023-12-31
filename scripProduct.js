let toggleButton = document.getElementById("toggle-button");
let body = document.querySelector(".container-product");
let accordionAbout = document.getElementById("aboutTitle");
let accordionCharacters = document.getElementById("characterTitle");
let viewMore = document.getElementById("viewSpecifications");

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  let titleProduct = document.querySelector(".title-product");
  let tagProduct = document.querySelector(".text-tag");
  let textProduct = document.querySelector(".product-shopy");
  let quantityInput = document.querySelector(".quantity-input ");
  let textQuantity = document.querySelector(".text-subtitles");
  let textSpecifications = document.querySelector(".product-tech");
  let buttonBorder = document.querySelector(".quantity_button");
  titleProduct.classList.toggle("title-product-dark");
  tagProduct.classList.toggle("text-tag-dark");
  textProduct.classList.toggle("product-shopy-dark");
  quantityInput.classList.toggle("quantity-input-dark");
  textQuantity.classList.toggle("text-subtitles-dark");
  textSpecifications.classList.toggle("product-tech-dark");
  buttonBorder.classList.toggle("quantity_button-dark");

  // Cambiar el texto del botón en cada iteración
  toggleButton.innerHTML = body.classList.contains("dark-mode")
    ? "Cambiar a modo claro"
    : "Cambiar a modo oscuro";
});
accordionAbout.addEventListener("click", function () {
  console.log("dando click");
  let aboutText = document.querySelector(".about-visibility");
  aboutText.classList.toggle("about-text");
});

accordionCharacters.addEventListener("click", function () {
  console.log("dando click");
  let characterText = document.querySelector(".character-text");
  characterText.classList.toggle("character-visibility");
});

viewMore.addEventListener("click", function () {
  console.log("dando click");
  let characterText = document.querySelector(".character-text");
  characterText.classList.add("character-visibility");
});
