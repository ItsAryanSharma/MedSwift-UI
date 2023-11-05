// Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}

//  Nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function (event) {
        if (event.target.classList.contains("dropdown-toggle")) {
            return; // Prevent hiding the menu for dropdown toggle clicks
        }
        navCollapse.classList.remove("show");
    })
})

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    // Set initial values before starting the counters
    document.getElementById("count1").textContent = 200;
    document.getElementById("count2").textContent = 191;
    document.getElementById("count3").textContent = 20;
    document.getElementById("count4").textContent = 32;
    document.getElementById("count5").textContent = 11;
    document.getElementById("count6").textContent = 24;
    document.getElementById("count7").textContent = 7;

    // Add an event listener to the button
    const startCounterButton = document.getElementById("startCounterButton");
    startCounterButton.addEventListener("click", () => {
        counter("count1", 22, 220, 3400);
        counter("count2", 22, 202, 3400);
        counter("count3", 0, 22, 3400);
        counter("count4", 0, 32, 3400);
        counter("count5", 0, 12, 3400);
        counter("count6", 0, 24, 3400);
        counter("count7", 0, 7, 3400);
    });
});

// JavaScript code for handling form submission and validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic client-side validation
    if (username === 'sexy' && password === '1222') {
        window.location.href = "P_8d.html";
    } else {
        alert('Login failed. Please check your username and password.');
    }

});

