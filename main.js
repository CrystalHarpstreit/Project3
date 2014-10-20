var $ = function(el) {
  return document.querySelectorAll(el);
};

var toggleBlink = false;
var stars = $('.star');

function iterateStars() {
  for (var i = 0; i < stars.length; i++) {
    blink(stars[i]);
  }

  toggleBlink = !toggleBlink;
}

setInterval(iterateStars, 500);

function blink(star) {
  if (toggleBlink) {
    star.style.backgroundColor = 'pink';
  } else {
    star.style.backgroundColor = 'white';
  }
}
