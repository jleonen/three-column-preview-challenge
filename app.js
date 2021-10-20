"use strict";

const sedanBtn = document.querySelector(".buttonSedan");
const suvBtn = document.querySelector(".buttonSUV");
const luxuryBtn = document.querySelector(".buttonLuxury");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

closeModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
});

sedanBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  modal.style.backgroundColor = "hsl(31, 77%, 52%)";
  modal.style.borderRadius = "12px";
  modal.querySelector("p").innerHTML = "This is sedan section.";
});

suvBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  modal.style.backgroundColor = "hsl(184, 100%, 22%)";
  modal.style.borderRadius = "12px";
  modal.querySelector("p").innerHTML = "This is SUV section.";
});

luxuryBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  modal.style.backgroundColor = "hsl(179, 100%, 13%)";
  modal.style.borderRadius = "12px";
  modal.querySelector("p").innerHTML = "This is luxury car section.";
});
