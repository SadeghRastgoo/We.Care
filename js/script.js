"use strict";

const openHamburgerMenuIcon = document.getElementById("open-hamburger-icon");
const closeHamburgerMenuIcon = document.getElementById("close-hamburger-icon");
const responsiveNavEl = document.getElementById("nav-responsive");
const searchTagDeleteIcons = document.querySelectorAll(".search-tag__delete");

function callbackFunc(entries, observer) {
  entries.forEach((entry) => {
    let tempEl = entry.target;
    let tempElAnimate = entry.target.getAttribute("data-animate");

    if (entry.isIntersecting) {
      tempEl.classList.remove("scale-0_1");
      tempEl.classList.add(tempElAnimate);
    } else {
      tempEl.classList.add("scale-0_1");
      tempEl.classList.remove(tempElAnimate);
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById("steps-img-1"));
observer.observe(document.getElementById("steps-img-2"));
observer.observe(document.getElementById("why-img-1"));
observer.observe(document.getElementById("why-img-2"));

openHamburgerMenuIcon.addEventListener("click", function () {
  responsiveNavEl.classList.remove("nav--responsive--hidden");
});

function closeHamburgerMenu() {
  responsiveNavEl.classList.add("nav--responsive--hidden");
}

closeHamburgerMenuIcon.addEventListener("click", closeHamburgerMenu);

searchTagDeleteIcons.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(el.parentElement.remove());
  });
});
