var toggleButton = document.getElementById("toggle-button");
var body = document.querySelector(".container");
var products = document.querySelectorAll(".card");

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  products.forEach(function (product) {
    var card = product;
    var tag = product.querySelector(".tag");
    var textContainer = product.querySelector(".title-product");

    card.classList.toggle("card-dark");
    tag.classList.toggle("tag-dark");
    textContainer.classList.toggle("title-product-dark");

    // Cambiar el texto del botón en cada iteración
    toggleButton.innerHTML = body.classList.contains("dark-mode")
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro";
  });
});
