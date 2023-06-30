const menu = document.querySelector('.menu-icon');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon')
const navbar = document.querySelector('.navbar');

// when click in the menu icon, it changes to a close icon and shows the navbar (for thinner screens)

menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
    
    if (navbar.classList.contains('show')){
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
    else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});