
// calss Active 
const navbarLinks = document.getElementById('navbarLinks').querySelectorAll('.nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClass();    // Remove 'active' class from all links
        link.classList.add('active'); // Add 'active' class to the clicked link
    });
});

function removeActiveClass() {
    navbarLinks.forEach(link => {
        link.classList.remove('active');
    });
}


// Navbar-scroll 
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currenscroll = window.pageYOffset;
    if (currenscroll == 0) { document.getElementById("mainNav").classList.remove("bg-black") }
    else {
        document.getElementById("mainNav").classList.add("bg-black")
    }

    if (window.innerWidth >= 992) {
        if (currenscroll <= 0) {
            body.classList.remove("scroll-up")
        }
        if (currenscroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }
        if (currenscroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.add("scroll-up")
            body.classList.remove("scroll-down")
        }
        lastScroll = currenscroll;
    }
}
)

