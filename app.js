// Smooth scrolling for anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// Navigation menu toggle
$('.menu-toggle').click(function() {
$('.nav-links').toggleClass('active');
});

// Sticky navigation bar
window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}
}
