// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// GSAP Timeline.
var tl = gsap.timeline();

// Hamburger button interaction.
const hamburger_btn = document.querySelector(".hamburger_btn");
const hamburger_line = document.querySelectorAll(".hamburger_line");
const menu = document.querySelector(".menu");

hamburger_btn.addEventListener("click", () => {
    // Hamburger lines animations.
    hamburger_line[0].classList.toggle("line_1_clicked");
    hamburger_line[1].classList.toggle("line_2_clicked");
    
    // Menu animations.
    menu.classList.toggle("menu_openned");
});

// Appearing on scroll animation.
const scroll_appear = document.querySelectorAll(".scroll_appear");
scroll_appear.forEach((appear) => {
    gsap.from(appear, {
        opacity: 0,
        duration: 0.5,
        y: 30,
        scrollTrigger: {
            trigger: appear,
            start: "top 70%",
        },
    });
});
