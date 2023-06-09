// This function implements smooth scrolling functionality when navigating through different sections of the website
function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}

// This function validates the contact form to ensure all required fields are filled out correctly before submission
function validateForm() {
  // Get the form element
  var form = document.getElementById("contact-form");
  
  // Add event listener to the form submit button
  form.addEventListener("submit", function(event) {
    // Get the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Check if all fields are filled out
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all required fields.");
      event.preventDefault();
    }
    
    // Check if email is valid
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });
}

// This function checks if an email address is valid
function isValidEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regex
  return emailRegex.test(email);
}

// This function adds interactivity to elements like buttons, menu items, or portfolio items with appropriate event listeners and actions
function addInteractivity() {
  // Add event listener to the menu button
  var menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", function() {
    // Toggle the menu visibility
    var menu = document.getElementById("menu");
    menu.classList.toggle("visible");
  });
  
  // Add event listener to the portfolio items
  var portfolioItems = document.getElementsByClassName("portfolio-item");
  for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener("click", function() {
      // Open the portfolio item in a new tab
      var link = this.getAttribute("data-link");
      window.open(link, "_blank");
    });
  }
}

// This function creates any additional JavaScript functionality that enhances the user experience or supports the desired behavior of the website
function additionalFunctionality() {
  // Add smooth scrolling functionality
  smoothScroll();
  
  // Validate the contact form
  validateForm();
  
  // Add interactivity to elements
  addInteractivity();
}

// Call the additionalFunctionality function when the page is loaded
window.onload = additionalFunctionality;

const text = "hi, welcome to my site";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(reset, 5000);
  }
}

function reset() {
  document.getElementById("typing-text").textContent = "";
  index = 0;
  type();
}

window.onload = function() {
  document.getElementById("typing-text").textContent = "hi, ";
  setTimeout(type, 1000);
  additionalFunctionality();
};
