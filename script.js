const dropDownMenu = document.getElementsByClassName('nav_box')[0];
const burgerMenu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
})

window.onscroll = function() {myFunction()};
const navbar = document.querySelector('.topBar-bg');
let sticky = navbar.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky');
    }
}
