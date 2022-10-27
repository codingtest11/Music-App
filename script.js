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
    let seconds = document.createElement('span');
    let secondsText = document.createElement('span');

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
    seconds.className = 'seconds';
    secondsText.className = 'secondsText';
    
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
    seconds.innerText = '10';
    secondsText.innerText = 'secs remaining';


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
const popupContainer = document.querySelector('.popup_container');


generate.addEventListener('click', ()=>{
    progressBar.classList.toggle('show');
    inputPart.classList.toggle('active');
    if(progressBar.className == 'progressBar show'){
        buffering();
    }
    generate.innerText = 'Generate';
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
            generate.innerText = 'Save';
            generate.addEventListener('click', ()=>{
                    popupContainer.classList.add('show');
            })
            clearInterval(intervale);
        }
        document.querySelector('.seconds').innerText = Math.ceil(remaining);
        width++;
    }   
    
    const intervale = setInterval(rate, interval);
};

const saveBtn = document.querySelector('.save');
const inputSongName = document.querySelector('.inputSongName');
const ulTag = document.querySelector('.ulTag');
saveBtn.addEventListener('click', ()=>{
    if(inputSongName.value == '') return
    addSong();
});
function addSong() {
    let liTag = document.createElement('li');
    let row = document.createElement('div');
    let thumbnailSmall = document.createElement('div');
    let img = document.createElement('img');
    let spanName = document.createElement('span');
    let spanTime = document.createElement('span');

    row.className = 'row';
    thumbnailSmall.className = 'thumbnail_small';

    img.src = 'music-3.jpg';
    spanName.innerText = inputSongName.value;
    spanTime.innerText = '02:50';

    thumbnailSmall.insertAdjacentElement('beforeend', img)
    row.insertAdjacentElement('beforeend', thumbnailSmall);
    row.insertAdjacentElement('beforeend', spanName);
    liTag.insertAdjacentElement('beforeend', row);
    liTag.insertAdjacentElement('beforeend', spanTime);
    ulTag.insertAdjacentElement('beforeend', liTag);

    popupContainer.classList.remove('show');
    inputSongName.value = '';
}


