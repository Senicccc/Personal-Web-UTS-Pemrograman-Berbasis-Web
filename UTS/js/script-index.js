document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".navbar-nav");

  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
