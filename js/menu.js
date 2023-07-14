const menu = document.querySelector('.menu-icon');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon')
const navbar = document.querySelector('.navbar');

// show/hide the menu when the user clicks in the menu icon

menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// close the menu when the user clicks anywhere or scrolls while the menu is open

const hideMenu = e => {
    if (navbar.classList.contains('show')
        && e.target != navbar && e.target != openIcon && e.target != closeIcon) {
        navbar.classList.toggle("show");
    }
}

window.addEventListener('click', hideMenu)
window.addEventListener('touchmove', hideMenu)