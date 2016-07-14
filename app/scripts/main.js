'use strict';

var bio = document.querySelector('.bio-wrapper');
var tidbits = document.querySelector('.tidbits-wrapper');

var route = function() {
  var destination = location.hash;
  if (destination.indexOf('tidbits') > -1) {
    tidbits.classList.add('active');
  }

  else if (destination.indexOf('bio') > -1) {
    bio.classList.add('active');
  }

  else {
    tidbits.classList.remove('active');
    bio.classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', route());

window.onhashchange = route;
