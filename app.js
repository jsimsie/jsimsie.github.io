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

// Contact form submission
$('#contact-form').submit(function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $.ajax({
    url: 'submit-form.php',
    type: 'POST',
    data: {
      name: name,
      email: email,
      message: message
    },
    success: function(response) {
      $('#contact-form').trigger('reset');
      alert('Form submitted successfully!');
    }
  });
});

