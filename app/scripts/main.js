'use strict';

var bio = document.querySelector('.bio-wrapper');
var caravan = document.querySelector('.caravan-wrapper');
// Change the name accordingly, then uncomment
var tidbits = document.querySelector('.tidbits-wrapper');
// PROJECTNAME = document.querySelector('.PROJECT-NAME-wrapper');
// var PROJECTNAME;
// PROJECTNAME = document.querySelector('.PROJECT-NAME-wrapper');

var route = function() {
  var destination = location.hash;
  if (destination.indexOf('caravan') > -1) {
    caravan.classList.add('active');
  }

  else if (destination.indexOf('bio') > -1) {
    bio.classList.add('active');
  }

  else if (destination.indexOf('tidbits') > -1) {
    tidbits.classList.add('active');
  }

  else {
    caravan.classList.remove('active');
    bio.classList.remove('active');
    // Change name accordingly then uncomment
    tidbits.classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', route());

window.onhashchange = route;
