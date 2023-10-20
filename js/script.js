window.addEventListener('scroll',reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');

for(var i = 0;i  < reveals.length; i++){


 var windowheight = window.innerHeight;
 var revealtop = reveals[i].getBoundingClientRect().top;
 var revealpoint = 150;

 if(revealtop < windowheight - revealpoint){
  reveals[i].classList.add('active');
 }
 else{
  reveals[i].classList.remove('active')
 }
}

}






const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * 33.33;
    carousel.style.transform = `translateX(${translateX}%)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Swipe functionality for screens wider than 768px
let startX;
let endX;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        // Swipe left
        if (currentIndex < 2) {
            currentIndex++;
            updateCarousel();
        }
    } else if (endX - startX > 50) {
        // Swipe right
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
});







let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
      // active section.classList.

      sec.classList.add("show-animate");
    }
    // if want to use animation that reapts

else{
  sec.classList.remove("show-animate");

}

  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  
  ScrollReveal().reveal(".home-content, .heading", { origin: "top " });
  
