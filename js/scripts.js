function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});
