"use strict";

const openHamburgerMenuIcon = document.getElementById("open-hamburger-icon");
const closeHamburgerMenuIcon = document.getElementById("close-hamburger-icon");
const responsiveNavEl = document.getElementById("nav-responsive");
const searchTagDeleteIcons = document.querySelectorAll(".search-tag__delete");
const categoriesEls = document.querySelectorAll(".popular__categories > li");

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

categoriesEls.forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelectorAll(".popular__items").forEach((el) => {
      el.classList.add("d-none");
    });
    categoriesEls.forEach((el) => {
      el.classList.remove("active-category");
      el.classList.remove("btn--primary");
    });

    el.classList.add("active-category");
    el.classList.add("btn--primary");
    let classTarget = document.querySelector(
      `.${el.getAttribute("data-target")}`
    );
    classTarget.classList.remove("d-none");
  });
});
