'use strict';

// var projects = document.querySelector('.projects');
var tidbits = document.querySelector('.tidbits-wrapper');

var route = function() {
  var destination = location.hash;
  console.log('yo');
  if (destination.indexOf('tidbits') > -1) {
    tidbits.classList.add('active');
  }

  else {
    tidbits.classList.remove('active');
  }
};

document.addEventListener('DOMContentLoaded', route());

window.onhashchange = route;
