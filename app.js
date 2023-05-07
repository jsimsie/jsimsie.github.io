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
window.onscroll = function() {
  stickyNav();
  animateImages();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Image animation on scroll
function animateImages() {
  $('.img-container').each(function() {
    var imgPos = $(this).offset().top;
    var scrollPos = $(window).scrollTop() + $(window).height();
    if (scrollPos > imgPos + 200) {
      $(this).addClass('animate');
    }
  });
}

// Show/hide header on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hidden");
  } else {
    document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
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
