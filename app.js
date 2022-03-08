let cardsList = document.querySelector(".cards");
let arrowButtonLeft = document.querySelector(".arrow-button.left");
let arrowButtonRight = document.querySelector(".arrow-button.right");

console.log(cardsList);

arrowButtonLeft.addEventListener("click", (e) => {
  cardsList.scrollLeft -= 35;
});

arrowButtonRight.addEventListener("click", (e) => {
  cardsList.scrollLeft += 35;
});
