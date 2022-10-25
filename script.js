const dropDownMenu = document.getElementsByClassName('nav_box')[0];
const burgerMenu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
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

const downloadField = document.querySelector('.download_field'),
addIcon = document.querySelector('#add');

addIcon.addEventListener('click', ()=>{
    let div = document.createElement('div');
    let inputEle = document.createElement('input');
    let btn = document.createElement('button');
    let xIcon = document.createElement('i')
    
    

    div.classList.add('input_field');
    inputEle.classList.add('inputPart');
    btn.classList.add('btn');
    xIcon.className = 'bx bx-x del';

    xIcon.addEventListener('click', ()=>{
        div.remove();
    })

    btn.innerText = 'Generate';
    inputEle.placeholder = 'url...'

    div.insertAdjacentElement('beforeend', inputEle);
    div.insertAdjacentElement('beforeend', btn);
    div.insertAdjacentElement('beforeend', xIcon);
    downloadField.insertAdjacentElement('beforeend', div)

})
