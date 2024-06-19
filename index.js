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

vision_btn.forEach()