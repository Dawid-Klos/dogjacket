import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')


//  MY VARIABLES  //

// Menu links //
const nav = document.querySelector(".nav--js");
const menuSubpage = document.querySelector('.nav__link--stats');
const menuSubpage2 = document.querySelector('.nav__link--settings');
const menuBacktoHome = document.querySelector('.nav__link--home');

// Subpages //
const subpage = document.querySelector('.subpage--js');
const subpage2 = document.querySelector('.subpage2--js');
const hamburger = document.querySelector(".hamburger--js");








// HAMBURGER MENU //

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});


//   HOME  //

// button //
menuBacktoHome.addEventListener('click', function (event) {
    subpage.classList.remove('subpage--open');
    subpage2.classList.remove('subpage2--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});


// Subpage//

// button //
menuSubpage.addEventListener('click', function (event) {
    subpage.classList.add('subpage--open');
    subpage2.classList.remove('subpage2--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});



// Subpage 2 //

// button //
menuSubpage2.addEventListener('click', function (event) {
    subpage2.classList.add('subpage2--open');
    subpage.classList.remove('subpage--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});