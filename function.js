// Get navbar and menu elements
const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Scroll event to trigger bottom border
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Add animated border
  } else {
    navbar.classList.remove("scrolled"); // Remove it
  }
});

// Toggle mobile nav on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Technology Partner

// Image Slider
// const slider = document.getElementById("slider");
// const container = document.getElementById("slider-container");
// // const prevBtn = document.getElementById("prev");
// // const nextBtn = document.getElementById("next");

// let isHovered = false;

// // Auto scroll function
// function autoScroll() {
//   if (!isHovered) {
//     container.scrollLeft += 320; // move 1 slide
//     if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//       container.scrollLeft = 0;
//     }
//   }
// }
// let interval = setInterval(autoScroll, 3000);

// // Pause on hover
// container.addEventListener("mouseenter", () => (isHovered = true));
// container.addEventListener("mouseleave", () => (isHovered = false));

// // Arrows
// nextBtn.addEventListener("click", () => {
//   container.scrollLeft += 320;
// });
// prevBtn.addEventListener("click", () => {
//   container.scrollLeft -= 320;
// });

// // Drag/Swipe support
// let isDragging = false;
// let startX;
// let scrollLeft;

// container.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startX = e.pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
//   container.style.cursor = "grabbing";
// });

// container.addEventListener("mouseup", () => {
//   isDragging = false;
//   container.style.cursor = "grab";
// });

// container.addEventListener("mouseleave", () => {
//   isDragging = false;
//   container.style.cursor = "grab";
// });

// container.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - container.offsetLeft;
//   const walk = x - startX;
//   container.scrollLeft = scrollLeft - walk;
// });

// // Touch support
// container.addEventListener("touchstart", (e) => {
//   isDragging = true;
//   startX = e.touches[0].pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
// });

// container.addEventListener("touchend", () => {
//   isDragging = false;
// });

// container.addEventListener("touchmove", (e) => {
//   if (!isDragging) return;
//   const x = e.touches[0].pageX - container.offsetLeft;
//   const walk = x - startX;
//   container.scrollLeft = scrollLeft - walk;
// });
