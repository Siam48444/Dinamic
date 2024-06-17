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

hamburger_btn.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    const hamburger_line = document.querySelectorAll(".hamburger_line");
    const hamburger_att = hamburger_btn.getAttribute("data-clicked");

    if (hamburger_att == "false") {
        hamburger_btn.setAttribute("data-clicked", "true");

        // Hamburger openned animations.
        tl.to(hamburger_line[0], { y: "0.225em", duration: 0.3, ease: "back.out" });
        tl.to(hamburger_line[1], { y: "-0.225em", duration: 0.3, ease: "back.out" }, "<");

        tl.to(hamburger_line[0], { rotate: "-45deg", duration: 0.3, ease: "back.out" });
        tl.to(hamburger_line[1], { rotate: "45deg", duration: 0.3, ease: "back.out" }, "<");

        // Menu opening.
        gsap.to(menu, { y: 0, duration: 0.8, ease: "power3.out" });
    }
    if (hamburger_att == "true") {
        hamburger_btn.setAttribute("data-clicked", "false");

        // Hamburger closed animations.
        tl.to(hamburger_line[0], { rotate: "0", duration: 0.3, ease: "back.out" });
        tl.to(hamburger_line[1], { rotate: "0", duration: 0.3, ease: "back.out" }, "<");

        tl.to(hamburger_line[0], { y: "-0.015em", duration: 0.3, ease: "back.out" });
        tl.to(hamburger_line[1], { y: "0.015em", duration: 0.3, ease: "back.out" }, "<");

        // Menu closing.
        gsap.to(menu, { y: "-100%", duration: 0.8, ease: "power3.in" });
    }
});
