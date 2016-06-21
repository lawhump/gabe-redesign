'use strict';

var projects = document.querySelector('.projects');
var tidbits = document.querySelector('.tidbits-wrapper');

var route = function() {
  function toggleClass(element, directionAdd) {
    if (directionAdd) {
      element.classList.add('active');
    }
    else {
      element.classList.remove('active');
    }
  }

  var destination = location.hash;

  if (destination.indexOf('tidbits') > -1) {
    projects.classList.add('active');
    // window.setTimeout(function() {
    //   toggleClass(tidbits, true);
    // }, 180);
    tidbits.classList.add('active');
  }

  else if (destination.indexOf('projects') > -1){
    if (tidbits.classList.contains('active')) {
      tidbits.classList.remove('active');
    }
    else {
      projects.classList.add('active');
    }
  }

  else {
    if (tidbits.classList.contains('active') && projects.classList.contains('active')) {
      tidbits.classList.remove('active');
      window.setTimeout(function () {
         toggleClass(projects, false);
      }, 300);
    }

    else if (projects.classList.contains('active')) {
      projects.classList.remove('active');
    }

    else {
      Function.prototype();
    }
  }
};

document.addEventListener('DOMContentLoaded', route);

window.onhashchange = route;
