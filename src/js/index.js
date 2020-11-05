import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

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

//  Color  //

const changeColor = document.querySelector('.square-save--js');

const square1 = document.querySelector('.square1--js');
const square2 = document.querySelector('.square2--js');
const square3 = document.querySelector('.square3--js');
const square4 = document.querySelector('.square4--js');
const square5 = document.querySelector('.square5--js');
const square6 = document.querySelector('.square6--js');
const square7 = document.querySelector('.square7--js');
const square8 = document.querySelector('.square8--js');
const square9 = document.querySelector('.square9--js');
const square10 = document.querySelector('.square10--js');
const square11 = document.querySelector('.square11--js');
const square12 = document.querySelector('.square12--js');
const square13 = document.querySelector('.square13--js');
const square14 = document.querySelector('.square14--js');
const square15 = document.querySelector('.square15--js');
const square16 = document.querySelector('.square16--js');
const square17 = document.querySelector('.square17--js');
const square18 = document.querySelector('.square18--js');
const square19 = document.querySelector('.square19--js');
const square20 = document.querySelector('.square20--js');
const square21 = document.querySelector('.square21--js');
const square22 = document.querySelector('.square22--js');
const square23 = document.querySelector('.square23--js');
const square24 = document.querySelector('.square24--js');

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




// Changing color //

changeColor.addEventListener('click', function(event) {
   square1.style.backgroundColor = '#fff';
   square2.style.backgroundColor = '#fff';
   square3.style.backgroundColor = '#fff';
   square4.style.backgroundColor = '#fff';
   square5.style.backgroundColor = '#fff';
   square6.style.backgroundColor = '#fff';
   square7.style.backgroundColor = '#fff';
   square8.style.backgroundColor = '#fff';
   square9.style.backgroundColor = '#fff';
   square10.style.backgroundColor = '#fff';
   square11.style.backgroundColor = '#fff';
   square12.style.backgroundColor = '#fff';
   square13.style.backgroundColor = '#fff';
   square14.style.backgroundColor = '#fff';
   square15.style.backgroundColor = '#fff';
   square16.style.backgroundColor = '#fff';
   square17.style.backgroundColor = '#fff';
   square18.style.backgroundColor = '#fff';
   square19.style.backgroundColor = '#fff';
   square20.style.backgroundColor = '#fff';
   square21.style.backgroundColor = '#fff';
   square22.style.backgroundColor = '#fff';
   square23.style.backgroundColor = '#fff';
   square24.style.backgroundColor = '#fff';
});


// user input - changing color pallette //

let userColor;
let defaultColor = "#213112";

window.addEventListener("load", startup, false);

function startup() {
    userColor = document.querySelector("#userColor");
    userColor.value = defaultColor;
    userColor.addEventListener("input", updateFirst, false);
    userColor.addEventListener("change", updateAll, false);
    userColor.select();
  }

  function updateFirst(event) {
    let span = document.getElementById("app__square");
  
    if (span) {
      span.style.backgroundColor = event.target.value;
    }
  }

  function updateAll(event) {
    document.querySelectorAll("span").forEach(function(span) {
      span.style.backgroundColor = event.target.value;
    });
  }