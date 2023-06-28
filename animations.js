let prevScrollpos = window.scrollY;
const header = document.getElementById('header');
const arrow = document.getElementById('arrow');

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
};
