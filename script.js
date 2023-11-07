//Obtener el boton toggle
var toggleButton = document.getElementById("toggle-button");

//Agregar un evento click al boton toggle
toggleButton.addEventListener("click", function () {
  // Obtener el elemento body
  var body = document.querySelector(".container");
  var card = document.querySelector(".card");
  var tag = document.querySelector(".tag");
  var textContainer = document.querySelector(".title-product");

  // Revisar si el elemento body tiene la clase "dark-mode"
  if (
    body.classList.contains("dark-mode") &&
    card.classList.contains("card-dark") &&
    textContainer.classList.contains("title-product-dark") &&
    tag.classList.contains("tag-dark")
  ) {
    // Remover la clase "dark-mode" del elemento body
    body.classList.remove("dark-mode");
    card.classList.remove("card-dark");
    textContainer.classList.remove("title-product-dark");
    tag.classList.remove("tag-dark");
    // Cambiar el texto del botón toggle
    toggleButton.innerHTML = "Activar modo oscuro";
  } else {
    // Agregar la clase "dark-mode" al elemento body
    body.classList.add("dark-mode");
    card.classList.add("card-dark");
    textContainer.classList.add("title-product-dark");
    tag.classList.add("tag-dark");
    // Cambiar el texto del botón toggle
    toggleButton.innerHTML = "Activar modo claro";
  }
});
