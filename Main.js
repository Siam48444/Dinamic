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

// Cart button interactivity.
const cart_btn = document.querySelector(".cart_div");
const cart_section = document.querySelector(".cart_section");
const cart_close_btn = document.querySelector(".cart_close_btn");

cart_btn.addEventListener("click", () => {
    cart_section.classList.add("cart_open");
});

cart_close_btn.addEventListener("click", () => {
    cart_section.classList.remove("cart_open");
});

cart_section.addEventListener("click", (e) => {
    if (e.target == cart_section) {
        cart_section.classList.remove("cart_open");
    }
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
