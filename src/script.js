var typed = new Typed("#typing", {
    strings: [
        "👋 Hi There!",
        "👋 Welcome to My Portfolio",
        "👋 Nice to Meet You!"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

new Typed("#typing-skill", {
    strings: [
        "Software Engineering Student",
        "Web Developer",
        "3D Designer",
        "Graphic Designer",
        "Logo And    Brand Designer",
        "Pixelart Artist",
        "Creative Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true
});

AOS.init({
    // once: true
});