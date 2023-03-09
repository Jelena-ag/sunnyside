const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function () {
  iconBurger.classList.toggle("show");
  iconX.classList.toggle("show");
  menu.classList.toggle("show");
});
