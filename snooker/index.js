const navbar = document.getElementById('navdiv')

function toggleNavbarShadow() {
    if (window.scrollY > 70) { // Adjust the scroll threshold as needed
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
}

// Initial check in case the page is loaded with some scroll position
toggleNavbarShadow();

// Add the scroll event listener
window.addEventListener('scroll', toggleNavbarShadow);