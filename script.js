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

    let progressBar = document.createElement('div');
    let bar = document.createElement('div');
    let loader = document.createElement('span');

    let info = document.createElement('div');
    let completion = document.createElement('p');
    let percentage = document.createElement('span');
    let complete = document.createElement('complete');

    let div = document.createElement('div');
    let inputEle = document.createElement('input');
    let btn = document.createElement('button');
    let xIcon = document.createElement('i');

    
    progressBar.className = 'progressBar';
    bar.className = 'bar';
    loader.className = 'loader';

    info.className = 'info';
    completion.className = 'completion';
    percentage.className = 'percentage';
    complete.className = 'complete';
    
    div.className = 'input_field';
    inputEle.className = 'inputPart';
    btn.className = 'btn';
    xIcon.className = 'bx bx-x del';

    xIcon.addEventListener('click', ()=>{
        div.remove();
    })

    btn.innerText = 'Generate';
    inputEle.placeholder = 'url...';
    inputEle.type = 'text';
    percentage.innerText = '0%';
    complete.innerText = 'completed';


    bar.insertAdjacentElement('beforeend', loader);
    progressBar.insertAdjacentElement('beforeend', bar);
    
    completion.insertAdjacentElement('beforeend', percentage);
    completion.insertAdjacentElement('beforeend', complete);
    info.insertAdjacentElement('beforeend', completion);
    progressBar.insertAdjacentElement('beforeend', info);

    div.insertAdjacentElement('beforeend', progressBar);

    div.insertAdjacentElement('beforeend', inputEle);
    div.insertAdjacentElement('beforeend', btn);
    div.insertAdjacentElement('beforeend', xIcon);

    downloadField.insertAdjacentElement('beforeend', div);

    btn.addEventListener('click', ()=>{
        progressBar.classList.toggle('show');
        inputEle.classList.toggle('active');
    });

});

const generate = document.querySelector('.btn');
const progressBar = document.querySelector('.progressBar');
const inputPart = document.querySelector('.inputPart');

generate.addEventListener('click', ()=>{
    progressBar.classList.toggle('show');
    inputPart.classList.toggle('active');
    buffering();
});

const buffering = () => {
    const bar = document.querySelector('.loader');
    let width = 1; 
    var interval = 100;

    const rate = () => {
        bar.style.width = `${width}%`;
        document.querySelector('.percentage').innerText = `${width}%`;
        if(width >= 100){
            clearInterval(intervale);
        }
        width++;
    }   
    
    const intervale = setInterval(rate, interval);
}


