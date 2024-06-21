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
        // Buttons clicking.
        vision_btn.forEach((btn) => {
            btn.classList.remove("vision_active");
        });
        vision_btn[i].classList.add("vision_active");

        // Visions changing on clicking the buttons.
        vision.forEach((vsn) => {
            vsn.classList.remove("vision_openned");
        });
        vision[i].classList.add("vision_openned");
    });
}

// FAQ interactivity.
const question = document.querySelectorAll(".question");
const question_svg = document.querySelectorAll(".question_main svg");
const answer = document.querySelectorAll(".answer");

for (let x = 0; x < question.length; x++) {
    question[x].addEventListener("click", () => {
        question_svg[x].classList.toggle("question_svg_rotated");
        answer[x].classList.toggle("answer_open");
    });
}
