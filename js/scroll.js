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
    duration: 1000,
    delay:100 
});

ScrollReveal().reveal('.info, .home-img img, .info-sec, .btn-contact, .phrase', { origin: 'left' });
ScrollReveal().reveal('#arrow img, .abt-title, .txt-contact h1, .txt-contact h3', { origin: 'top', distance: '50px' });


//contact icons

ScrollReveal().reveal('#icon1', { origin: 'left', delay: 300, distance: '120px' });
ScrollReveal().reveal('#icon2', { origin: 'left', delay: 250, distance: '120px' });
ScrollReveal().reveal('#icon3', { origin: 'left', delay: 200, distance: '120px' });
ScrollReveal().reveal('#icon4', { origin: 'left', delay: 150, distance: '120px' });
ScrollReveal().reveal('#icon5', { origin: 'left', delay: 100, distance: '120px' });