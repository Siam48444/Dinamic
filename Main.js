// Lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// GSAP Timeline.
var tl = gsap.timeline();

// Hamburger button interaction.
const hamburger_btn = document.querySelector(".hamburger_btn");

hamburger_btn.addEventListener("click", () => {
    const hamburger_att = hamburger_btn.getAttribute("data-clicked");

    if ((hamburger_att = "false")) {
        hamburger_btn.setAttribute("data-clicked", "true");
    }
    if ((hamburger_att = "true")) {
        hamburger_btn.setAttribute("data-clicked", "false");
    }
});
