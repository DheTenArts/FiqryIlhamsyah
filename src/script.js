const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var typed = new Typed("#typing", {
    strings: [
        "👋 Hi Semuanya!",
        "👋 Selamat Datang di Portfolio Ku",
        "👋 Senang Bertemu dengan Kalian!"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

new Typed("#typing-skill", {
    strings: [
        "Mahasiswa Software Engineering Technology",
        "Web Developer",
        "3D Designer",
        "Graphic Designer",
        "Logo dan Brand Designer",
        "Pixelart Artist",
        "Creative Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true
});

// AOS.init({
//     once: true
// });
sal();