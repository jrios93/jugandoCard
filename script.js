let toggleButton = document.getElementById("toggle-button");
let body = document.querySelector(".container");
let products = document.querySelectorAll(".card");

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  products.forEach(function (product) {
    let card = product;
    let tag = product.querySelector(".tag");
    let textContainer = product.querySelector(".title-product");

    card.classList.toggle("card-dark");
    tag.classList.toggle("tag-dark");
    textContainer.classList.toggle("title-product-dark");

    // Cambiar el texto del botón en cada iteración
    toggleButton.innerHTML = body.classList.contains("dark-mode")
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro";
  });
});
