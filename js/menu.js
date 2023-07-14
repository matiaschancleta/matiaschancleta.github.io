const menu = document.querySelector('.menu-icon');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon')
const navbar = document.querySelector('.navbar');

// when click in the menu icon, it changes to a close icon and shows the navbar (for thinner screens)

menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

window.addEventListener('mousedown', e => {
    if (navbar.classList.contains('show')
        && e.target != navbar && e.target != openIcon && e.target != closeIcon) {
        navbar.classList.toggle("show");
    }

    return console.log(e)
})