//Adding scroll to aside section.
const overflow = document.getElementsByClassName("new");
overflow[0].style.overflow = "scroll";

//Removing the Background Image.
const body = document.getElementsByTagName("body");
body[0].style.backgroundImage = "none";

let btnToggle = document.querySelector('.navbar-toggler');

btnToggle.addEventListener('click', function () {
  navBar.style.display = 'block';
});
