// GSAP Timeline.
var tl = gsap.timeline();

// Load animation.
tl.from(".load_appear", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.3,
});

// Vision buttons interactivity.
const vision_btn = document.querySelectorAll(".vision_btn");

