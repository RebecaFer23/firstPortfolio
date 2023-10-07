function mover(){
    const btn = document.getElementById('menu-button')
    btn.classList.toggle('ligar')
}

function menuShow() {
    let menuMobile = document.querySelector('.menu-button');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}

const menuButton = document.getElementById('menu-button');


function toggleMenu() {
const nav = document.getElementById('nav'); 
nav.classList.toggle('active');   
}

menuButton.addEventListener('click', toggleMenu);
