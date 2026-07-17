const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

new Typed("#typing", {
    strings: ["👋 Hi, Selamat Datang di Portofolio Ku"],
    typeSpeed: 60,
    showCursor: false,
    loop: false
});


new Typed("#typing-skill", {
    strings: [
        "Mahasiswa Software Engineering",
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