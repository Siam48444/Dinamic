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
    const hamburger_line = document.querySelectorAll(".hamburger_line");
    const hamburger_att = hamburger_btn.getAttribute("data-clicked");

    if (hamburger_att == "false") {
        hamburger_btn.setAttribute("data-clicked", "true");

        // Hamburger openned animations.
        tl.to(hamburger_line[0], { y: "0.225em", duration: 0.2 }, "a");
        tl.to(hamburger_line[1], { y: "-0.225em", duration: 0.2 }, "a");
        
        tl.to(hamburger_line[0], { rotate: "-45deg", duration: 0.2 }, "b");
        tl.to(hamburger_line[1], { rotate: "45deg", duration: 0.2 }, "b");
    }
    if (hamburger_att == "true") {
        hamburger_btn.setAttribute("data-clicked", "false");
        
        // Hamburger closed animations.
        tl.to(hamburger_line[0], { rotate: "0", duration: 0.2 }, "c");
        tl.to(hamburger_line[1], { rotate: "0", duration: 0.2 }, "c");

        tl.to(hamburger_line[0], { y: "-0.225em", duration: 0.2 }, "d");
        tl.to(hamburger_line[1], { y: "0.225em", duration: 0.2 }, "d");
    }
});
