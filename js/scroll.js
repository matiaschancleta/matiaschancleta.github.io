let prevScrollpos = window.scrollY;
const header = document.getElementById('header');
const arrow = document.getElementById('arrow');
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')


window.onscroll = function () {
    
    let currentScrollPos = window.scrollY;

    // if the scroll position is under 100, hides the header

    if (prevScrollpos > currentScrollPos || currentScrollPos <= 100 ) {
        header.style.top = '0';    
    } else {
        header.style.top = '-100px';
    }

    // if the user scrolls, hides the arrow

    if (prevScrollpos > currentScrollPos && currentScrollPos === 0) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }

    prevScrollpos = currentScrollPos;


    // highligth the navbar links according to the section in the screen

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000
    
});

ScrollReveal().reveal('.info, .home-img img, .abt-info, .btn-contact', { origin: 'left' });
ScrollReveal().reveal('#arrow img, .abt-title', { origin: 'top' });