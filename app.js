// MAIN SLIDER
let switch_banners = document.querySelectorAll(".switch_banner");
let wrapper = document.querySelector(".wrapper");
let to_left = document.querySelector(".to_left");
let to_right = document.querySelector(".to_right");

to_right.addEventListener("click", () => {
  wrapper.scrollLeft += wrapper.firstElementChild.clientWidth;
});
to_left.addEventListener("click", () => {
  wrapper.scrollLeft -= wrapper.firstElementChild.clientWidth;
});
