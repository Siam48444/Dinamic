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

for (let i = 0; i < vision_btn.length; i++) {
    vision_btn[i].addEventListener("click", () => {
        vision_btn.forEach((btn) => {
            btn.classList.remove("vision_active");
        });
        vision_btn[i].classList.add("vision_active");
    });
}
