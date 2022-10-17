const dropDownMenu = document.getElementsByClassName('nav_box')[0];
const burgerMenu = document.getElementById('menu');
const close = document.getElementsByClassName('close')[0];
const slider = document.querySelector('.slider');

burgerMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
})

close.addEventListener('click', () => {
    slider.classList.toggle('active')
})

window.onscroll = function() {myFunction()};
window.onscroll = function() {stickyFunction()};
const navbar = document.querySelector('.topBar-bg');
let sticky = navbar.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky');
    }
}

function stickyFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
}