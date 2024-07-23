// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// GSAP Animations with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define GSAP animations
gsap.from('.about-section .container', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true
    }
});

gsap.from('.history-section .container', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true
    }
});

gsap.from('.mission-section .container', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.mission-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true
    }
});

gsap.from('.team-section .container', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true
    }
});

gsap.from('.contact-section .container', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true
    }
});
