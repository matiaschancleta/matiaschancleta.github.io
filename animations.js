/* When the user scrolls down, hide the header. When the user scrolls up, show the header */
// var prevScrollpos = window.scrollY;

// window.onscroll = function() {

//   var currentScrollPos = window.scrollY;

//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-50px";
//   }

//   prevScrollpos = currentScrollPos;

// }

// var prevScrollPos = window.scrollY;
// var navbar = document.getElementById("header"); 

// window.addEventListener("scroll", function() {
//   var currentScrollPos = window.scrollY;
  
//   if (prevScrollPos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-50px";
//   }
  
//   prevScrollPos = currentScrollPos;
// });

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 100) {
     document.getElementById('mainNav').style.top = '0';
  } else {
     document.getElementById('mainNav').style.top = '-100px';
   }
  prevScrollpos = currentScrollPos;
};