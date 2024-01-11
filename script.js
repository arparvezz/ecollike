let mobileMenuIcon = document.querySelector(".menu__icon a");
let menu = document.querySelector(".links");

mobileMenuIcon.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("active");
    console.log("clicked");
});

// click slider for hero section
$(function () {
    // jQuery methods go here...
    $(".sliders").slick();
});
