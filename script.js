$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("show");
})

// 2.
// const burger = document.querySelector(".burger");
// const activeElement = document.querySelectorAll(".active");

// burger.addEventListener("click", function () {
//     for (let i = 0; i < activeElement.length; i++) {
//         activeElement[i].classList.toggle("show")
//     }
// })


// 1.
// const burger = document.querySelector(".burger");
// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const menu = document.querySelector(".menu");

// burger.addEventListener("click", function () {
//   iconBurger.classList.toggle("show");
//   iconX.classList.toggle("show");
//   menu.classList.toggle("show");
// });
