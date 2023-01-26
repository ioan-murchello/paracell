"use strict";

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//burger--------------------------------------

function burgerMenu() {
  var burgerBtn = document.querySelector(".header__menu_icon"),
    btnLines = burgerBtn.querySelectorAll("span"),
    body = document.querySelector("body"),
    navbar = document.querySelector(".header__nav");
  navbar.addEventListener('click', function () {
    navbar.classList.remove("active");
    body.classList.remove("blocked");
    btnLines.forEach(function (line) {
      return line.classList.remove("active-burger");
    });
  });
  burgerBtn.addEventListener("click", function () {
    if (!navbar.classList.contains("active")) {
      navbar.classList.add("active");
      btnLines.forEach(function (line) {
        return line.classList.add("active-burger");
      });
      body.classList.add("blocked");
    } else {
      navbar.classList.remove("active");
      body.classList.remove("blocked");
      btnLines.forEach(function (line) {
        return line.classList.remove("active-burger");
      });
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 764) {
      navbar.classList.remove("active");
      body.classList.remove("blocked");
      btnLines.forEach(function (line) {
        return line.classList.remove("active-burger");
      });
    }
  });
}
burgerMenu();
//-----------------------------------------------