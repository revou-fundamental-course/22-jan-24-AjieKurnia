// scrolling navbar
let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.list');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) => item.addEventListener('click', function(){
    activeLink(this);
}));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    })
};

// images slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
}

var slideIndexI = 1;

// Function to show slides
function showSlidesI() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndexI++;

    // Reset the index to 1 if it exceeds the number of slides
    if (slideIndexI > slides.length) {
        slideIndexI = 1;
    }

    // Show the current slide
    slides[slideIndexI - 1].style.display = "block";

    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }

    // Add active class to the current dot
    dots[slideIndexI - 1].className += " actives";

    // Call the function again after 2 seconds (you can adjust this time)
    setTimeout(showSlidesI, 2000);
}

// Initial call to start the slideshow
showSlidesI();

// Your JavaScript code goes here
function myFunction() {
    var x = document.getElementById("navBanner");
    console.log(x)
    if (x.className === "topnav") {
        x.className += " slide";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        clearErrors();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const selectOption = document.getElementById("selectOption").value;

        let isValid = true;

        if (username.trim() === "") {
            isValid = false;
            setError("usernameError", "Username is required");
        }

        if (!isValidEmail(email)) {
            isValid = false;
            setError("emailError", "Invalid email address");
        }

        if (selectOption === "") {
            isValid = false;
            setError("selectOptionError", "Please select an option");
        }

        if (isValid) {
            alert("Form submitted successfully!");
            // Add further logic for form submission or AJAX request here
        }
    }

    function setError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(errorMessage) {
            errorMessage.textContent = "";
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
