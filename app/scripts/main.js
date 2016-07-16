'use strict';

var bio = document.querySelector('.bio-wrapper');
var tidbits = document.querySelector('.tidbits-wrapper');
// Change the name accordingly, then uncomment
var PROJECTNAME;
// PROJECTNAME = document.querySelector('.PROJECT-NAME-wrapper');

var route = function() {
  var destination = location.hash;
  if (destination.indexOf('tidbits') > -1) {
    tidbits.classList.add('active');
  }

  else if (destination.indexOf('bio') > -1) {
    bio.classList.add('active');
  }

  else if (destination.indexOf('PROJECT-NAME') > -1) {
    PROJECTNAME.classList.add('active');
  }

  else {
    tidbits.classList.remove('active');
    bio.classList.remove('active');
    // Change name accordingly then uncomment
    // PROJECTNAME.classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', route());

window.onhashchange = route;
