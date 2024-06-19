// GSAP Timeline.
var tl = gsap.timeline();

// Load animation.
gsap.from(".load_appear", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.3,
});

// Vision button interactivity.
const vision_btn = document.querySelectorAll(".vision_btn");
const vision = document.querySelectorAll(".vision");

vision_btn[0].addEventListener("click", () => {
    vision_btn[0].classList.add("vision_active");
    vision_btn[1].classList.remove("vision_active");
    vision_btn[2].classList.remove("vision_active");
});

vision_btn[1].addEventListener("click", () => {
    vision_btn[0].classList.remove("vision_active");
    vision_btn[1].classList.add("vision_active");
    vision_btn[2].classList.remove("vision_active");
});

vision_btn[2].addEventListener("click", () => {
    vision_btn[0].classList.remove("vision_active");
    vision_btn[1].classList.remove("vision_active");
    vision_btn[2].classList.add("vision_active");
});
