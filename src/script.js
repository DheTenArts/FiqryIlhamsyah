const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

new Typed("#typing", {
    strings: ["👋 Hi, Welcome to My Portfolio"],
    typeSpeed: 60,
    showCursor: false,
    loop: false
});


new Typed("#typing-skill", {
    strings: [
        "Software Engineering Student",
        "Web Developer",
        "Graphic Designer",
        "PixelArt Artist",
        "3D Designer"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 2000,
    loop: true
});

AOS.init({
    once: true
});