const dropDownMenu = document.getElementsByClassName('nav_box')[0];
const burgerMenu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
})

window.onscroll = function() {queueFunction()};
window.onscroll = function() {gridFunction()};
window.onscroll = function() {downloadFunction()};
const navbar = document.querySelector('.topBar-bg');
let sticky = navbar.offsetTop;

function queueFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky');
    }
}

function gridFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
}

function downloadFunction() {
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
    let seconds = document.createElement('span');
    let secondsText = document.createElement('span');

    let div = document.createElement('div');
    let inputEle = document.createElement('input');
    let inputRe = document.createElement('input');

    let dropdown = document.createElement('div');
    let dropdownToggle = document.createElement('button');
    let dropdownMenu = document.createElement('ul');
    let dropdownOption1 = document.createElement('li');
    let dropdownOption2 = document.createElement('li');
    let dropdownOption3 = document.createElement('li');
    let dropdownOption4 = document.createElement('li');
    let dropdownOption5 = document.createElement('li');
    let dropdownOption6 = document.createElement('li');


    let btn = document.createElement('button');
    let xIcon = document.createElement('i');

    
    progressBar.className = 'progressBar';
    bar.className = 'bar';
    loader.className = 'loader';

    info.className = 'info';
    completion.className = 'completion';
    percentage.className = 'percentage';
    complete.className = 'complete';
    seconds.className = 'seconds';
    secondsText.className = 'secondsText';
    
    div.className = 'input_field';
    inputEle.className = 'inputPart';
    inputRe.className = 'inputSongName';

    dropdown.className = 'dropdown';
    dropdownToggle.className = 'dropdown_toggle';
    dropdownMenu.className = 'dropdownMenu';
    dropdownOption1.className = 'dropdown_option';
    dropdownOption2.className = 'dropdown_option';
    dropdownOption3.className = 'dropdown_option';
    dropdownOption4.className = 'dropdown_option';
    dropdownOption5.className = 'dropdown_option';
    dropdownOption6.className = 'dropdown_option';

    btn.className = 'btn';
    xIcon.className = 'bx bx-x del';

    xIcon.addEventListener('click', ()=>{
        div.remove();
    })

    btn.innerText = 'Generate';
    inputEle.placeholder = 'url...';
    inputEle.type = 'text';
    inputRe.placeholder = 'Rename file';
    inputRe.type = 'text';
    percentage.innerText = '0%';
    complete.innerText = 'completed';
    seconds.innerText = '10';
    secondsText.innerText = 'secs remaining';
    dropdownToggle.innerText = 'Select...';
    dropdownOption1.innerText = 'Queue';
    dropdownOption2.innerText = 'Natural Songs';
    dropdownOption3.innerText = 'English Songs';
    dropdownOption4.innerText = 'English Stories';
    dropdownOption5.innerText = 'Chinese Songs';
    dropdownOption6.innerText = 'Chinese Stories';


    bar.insertAdjacentElement('beforeend', loader);
    progressBar.insertAdjacentElement('beforeend', bar);
    
    completion.insertAdjacentElement('beforeend', percentage);
    completion.insertAdjacentElement('beforeend', complete);
    completion.insertAdjacentElement('beforeend', seconds);
    completion.insertAdjacentElement('beforeend', secondsText);
    info.insertAdjacentElement('beforeend', completion);
    progressBar.insertAdjacentElement('beforeend', info);

    div.insertAdjacentElement('beforeend', progressBar);

    div.insertAdjacentElement('beforeend', inputEle);
    div.insertAdjacentElement('beforeend', inputRe);

    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption1);
    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption2);
    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption3);
    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption4);
    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption5);
    dropdownMenu.insertAdjacentElement('beforeend', dropdownOption6);
    dropdown.insertAdjacentElement('beforeend', dropdownToggle);
    dropdown.insertAdjacentElement('beforeend', dropdownMenu);

    div.insertAdjacentElement('beforeend', dropdown);
    div.insertAdjacentElement('beforeend', btn);
    div.insertAdjacentElement('beforeend', xIcon);

    downloadField.insertAdjacentElement('beforeend', div);


    btn.addEventListener('click', ()=>{
        progressBar.classList.toggle('show');
        inputEle.classList.toggle('active');
        inputRe.classList.toggle('active');
        dropdown.classList.toggle('active');
    });


    dropdownToggle.addEventListener('click', ()=>{
        dropdownMenu.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
    });

    const options = Array.from(document.querySelectorAll('.dropdown_option'));
    options.forEach((option) => {
    option.addEventListener('click', () => {
        dropdownToggle.textContent = option.textContent;
        dropdownMenu.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
    });
})

});

const generate = document.querySelector('.btn');
const progressBar = document.querySelector('.progressBar');
const inputPart = document.querySelector('.inputPart');
const inputSongName = document.querySelector('.inputSongName');
const dropdown = document.querySelector('.dropdown');
const popupContainer = document.querySelector('.popup_container');


generate.addEventListener('click', ()=>{
    progressBar.classList.toggle('show');
    inputPart.classList.toggle('active');
    inputSongName.classList.toggle('active');
    dropdown.classList.toggle('active');
    generate.innerText = 'generate';
    if(dropdown.className == 'dropdown active') {
        buffering();
    }
});

const buffering = () => {
    const bar = document.querySelector('.loader');
    let width = 1; 
    var interval = 100,
        remaining = interval/10,
        minus_rem = remaining/100;

    const rate = () => {
        bar.style.width = `${width}%`;
        document.querySelector('.percentage').innerText = `${width}%`;
        remaining = remaining - minus_rem;
        if(width >= 100){
            remaining = 0;
            generate.innerText = 'Done'
            clearInterval(intervale);
        }
        document.querySelector('.seconds').innerText = Math.ceil(remaining);
        width++;
    }   
    
    const intervale = setInterval(rate, interval);
};

const dropdownToggle = document.querySelector('.dropdown_toggle');
const dropdownMenu = document.querySelector('.dropdownMenu');
const options = Array.from(document.querySelectorAll('.dropdown_option'));

dropdownToggle.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('active');
    dropdownToggle.classList.toggle('active');
})

options.forEach((option) => {
    option.addEventListener('click', () => {
        dropdownToggle.textContent = option.textContent;
        dropdownMenu.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
    })
})




