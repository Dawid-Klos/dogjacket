import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')


//  MY VARIABLES  //

// Menu links //
const nav = document.querySelector(".nav--js");
const menuFront = document.querySelector('.nav__link--stats');
const menuSubpage2 = document.querySelector('.nav__link--settings');
const menuBacktoHome = document.querySelector('.nav__link--home');

// Subpages //
const front = document.querySelector('.front--js');
const subpage2 = document.querySelector('.subpage2--js');
const hamburger = document.querySelector(".hamburger--js");

//  Color - Back panels  //

const squareOn = document.querySelector('.square-on--js');
const squareOff = document.querySelector('.square-off--js');

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

//  Color - Front panels  //

const frontOn = document.querySelector('.front-on--js');
const frontOff = document.querySelector('.front-off--js');

const frontSquare1 = document.querySelector('.front-square1--js');
const frontSquare2 = document.querySelector('.front-square2--js');
const frontSquare3 = document.querySelector('.front-square3--js');
const frontSquare4 = document.querySelector('.front-square4--js');
const frontSquare5 = document.querySelector('.front-square5--js');
const frontSquare6 = document.querySelector('.front-square6--js');
const frontSquare7 = document.querySelector('.front-square7--js');
const frontSquare8 = document.querySelector('.front-square8--js');
const frontSquare9 = document.querySelector('.front-square9--js');
const frontSquare10 = document.querySelector('.front-square10--js');
const frontSquare11 = document.querySelector('.front-square11--js');
const frontSquare12 = document.querySelector('.front-square12--js');
const frontSquare13 = document.querySelector('.front-square13--js');
const frontSquare14 = document.querySelector('.front-square14--js');
const frontSquare15 = document.querySelector('.front-square15--js');
const frontSquare16 = document.querySelector('.front-square16--js');
const frontSquare17 = document.querySelector('.front-square17--js');
const frontSquare18 = document.querySelector('.front-square18--js');
const frontSquare19 = document.querySelector('.front-square19--js');
const frontSquare20 = document.querySelector('.front-square20--js');
const frontSquare21 = document.querySelector('.front-square21--js');
const frontSquare22 = document.querySelector('.front-square22--js');
const frontSquare23 = document.querySelector('.front-square23--js');
const frontSquare24 = document.querySelector('.front-square24--js');

// HAMBURGER MENU //

hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});


//   HOME  //

// button //
menuBacktoHome.addEventListener('click', function (event) {
    front.classList.remove('front--open');
    subpage2.classList.remove('subpage2--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});


// Subpage//

// button //
menuFront.addEventListener('click', function (event) {
    front.classList.add('front--open');
    subpage2.classList.remove('subpage2--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});



// Subpage 2 //

// button //
menuSubpage2.addEventListener('click', function (event) {
    subpage2.classList.add('subpage2--open');
    front.classList.remove('front--open');
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('is-active');
});


// Back panel - Changing color //

squareOn.addEventListener('click', function(event) {
  

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


squareOff.addEventListener('click', function(event) {
  

  square1.style.backgroundColor = '#6b5f5f';
  square2.style.backgroundColor = '#6b5f5f';
  square3.style.backgroundColor = '#6b5f5f';
  square4.style.backgroundColor = '#6b5f5f';
  square5.style.backgroundColor = '#6b5f5f';
  square6.style.backgroundColor = '#6b5f5f';
  square7.style.backgroundColor = '#6b5f5f';
  square8.style.backgroundColor = '#6b5f5f';
  square9.style.backgroundColor = '#6b5f5f';
  square10.style.backgroundColor = '#6b5f5f';
  square11.style.backgroundColor = '#6b5f5f';
  square12.style.backgroundColor = '#6b5f5f';
  square13.style.backgroundColor = '#6b5f5f';
  square14.style.backgroundColor = '#6b5f5f';
  square15.style.backgroundColor = '#6b5f5f';
  square16.style.backgroundColor = '#6b5f5f';
  square17.style.backgroundColor = '#6b5f5f';
  square18.style.backgroundColor = '#6b5f5f';
  square19.style.backgroundColor = '#6b5f5f';
  square20.style.backgroundColor = '#6b5f5f';
  square21.style.backgroundColor = '#6b5f5f';
  square22.style.backgroundColor = '#6b5f5f';
  square23.style.backgroundColor = '#6b5f5f';
  square24.style.backgroundColor = '#6b5f5f';

});

// Front panel - changing color //

frontOn.addEventListener('click', function(event) {
  

  frontSquare1.style.backgroundColor = '#fff';
  frontSquare2.style.backgroundColor = '#fff';
  frontSquare3.style.backgroundColor = '#fff';
  frontSquare4.style.backgroundColor = '#fff';
  frontSquare5.style.backgroundColor = '#fff';
  frontSquare6.style.backgroundColor = '#fff';
  frontSquare7.style.backgroundColor = '#fff';
  frontSquare8.style.backgroundColor = '#fff';
  frontSquare9.style.backgroundColor = '#fff';
  frontSquare10.style.backgroundColor = '#fff';


});


frontOff.addEventListener('click', function(event) {
 

 frontSquare1.style.backgroundColor = '#6b5f5f';
 frontSquare2.style.backgroundColor = '#6b5f5f';
 frontSquare3.style.backgroundColor = '#6b5f5f';
 frontSquare4.style.backgroundColor = '#6b5f5f';
 frontSquare5.style.backgroundColor = '#6b5f5f';
 frontSquare6.style.backgroundColor = '#6b5f5f';
 frontSquare7.style.backgroundColor = '#6b5f5f';
 frontSquare8.style.backgroundColor = '#6b5f5f';
 frontSquare9.style.backgroundColor = '#6b5f5f';
 frontSquare10.style.backgroundColor = '#6b5f5f';

});

// BACK PANEL -  user input - changing color pallette //

let hamburgerSpan = document.querySelector('.hamburger-box');


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
    hamburgerSpan.style.backgroundColor = '#2D2241';
  }

  function updateAll(event) {
    document.querySelectorAll("span").forEach(function(span) {
      span.style.backgroundColor = event.target.value;
      hamburgerSpan.style.backgroundColor = '#2D2241';
    });
  }

// FRONT PANEL -  user input - changing color pallette //

let userFrontColor;
let defaultFrontColor = "#ffffff";

window.addEventListener("load", startupFront, false);

function startupFront() {
    userFrontColor = document.querySelector("#front__userColor");
    userFrontColor.value = defaultFrontColor;
    userFrontColor.addEventListener("input", updateFirstFront, false);
    userFrontColor.addEventListener("change", updateAllFront, false);
    userFrontColor.select();
  }

  function updateFirstFront(event) {
    let spanFront = document.getElementById("front__square");
  
    if (spanFront) {
      spanFront.style.backgroundColor = event.target.value;
    }
    hamburgerSpan.style.backgroundColor = '#2D2241';
  }

  function updateAllFront(event) {
    document.querySelectorAll("span").forEach(function(spanFront) {
      spanFront.style.backgroundColor = event.target.value;
      hamburgerSpan.style.backgroundColor = '#2D2241';
    });
  }

