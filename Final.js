\document.addEventListener('DOMContentLoaded', function () {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Show home page by default
    document.getElementById('home').classList.add('active');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show target page
            document.getElementById(targetId).classList.add('active');

            // Close mobile menu if open
            nav.classList.remove('show');
            burger.classList.remove('toggle');
        });
    });

    // Burger menu functionality
    burger.addEventListener('click', function () {
        nav.classList.toggle('show');
        this.classList.toggle('toggle');
    });

    // Form submission handlers
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Registration submitted successfully!');
            this.reset();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation
            if (username && password) {
                alert('Login successful! Redirecting to staff dashboard...');
                this.reset();
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for burger menu
    burger.addEventListener('click', function () {
        const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line2');
        const line3 = document.querySelector('.line3');

        line1.classList.toggle('rotate-down');
        line2.classList.toggle('hide');
        line3.classList.toggle('rotate-up');
    });
});