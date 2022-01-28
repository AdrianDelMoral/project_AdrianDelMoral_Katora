/* let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Función
function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 2500);
}

// Ejecución
animate(dots, "dots--animate"); */