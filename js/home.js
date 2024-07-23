document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const menuIcon = document.getElementById('menu-icon');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon'); // Get the icon element

    // Toggle sidebar and menu icon
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        body.classList.toggle('no-scroll');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Toggle dark mode and icon
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    });

    // Check dark mode preference from local storage
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
        const nextSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.remove('active');
        slides[nextSlide].classList.add('active');

        slides[currentSlide].classList.add('left');
        slides[nextSlide].classList.add('right');

        currentSlide = nextSlide;

        setTimeout(() => {
            slides[currentSlide].classList.remove('left', 'right');
        }, 500); // Adjust timing to match CSS transition duration
    }, 3000); // Adjust interval for slide change (in milliseconds)
});
