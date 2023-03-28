// MAIN SLIDER
let switch_banners = document.querySelectorAll(".switch_banner");
let wrapper = document.querySelector(".wrapper");
let active_slide = document.querySelector(".activated");
let to_left = document.querySelector(".to_left");
let to_right = document.querySelector(".to_right");

to_right.addEventListener("click", () => {
  wrapper.scrollLeft += wrapper.firstElementChild.clientWidth;
  active_slide.nextElementSibling.classList.add("activated");
  active_slide.classList.remove("activated");
  active_slide = active_slide.nextElementSibling;
  to_left.classList.remove("opacity-30");
  to_left.classList.add("opacity-90");
  if (active_slide == active_slide.parentNode.lastElementChild) {
    to_right.classList.add("opacity-30");
    to_right.classList.remove("opacity-90");
  }
});
to_left.addEventListener("click", () => {
  wrapper.scrollLeft -= wrapper.firstElementChild.clientWidth;
  active_slide.previousElementSibling.classList.add("activated");
  active_slide.classList.remove("activated");
  active_slide = active_slide.previousElementSibling;
  if (active_slide == active_slide.parentNode.firstElementChild) {
    to_left.classList.add("opacity-30");
    to_left.classList.remove("opacity-90");
  }
  to_right.classList.remove("opacity-30");
  to_right.classList.add("opacity-90");
});
