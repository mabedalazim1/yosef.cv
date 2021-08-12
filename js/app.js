/* Start Nav Bar */
const navbar = document.querySelector(".nav");
const navbarA = document.querySelectorAll(".nav a");
const navUl = document.querySelector(".nav ul");
const toggle = document.querySelector(".toggle i");

// Toggle nav bar in small screens
const toggleNav = () => {
  toggle.addEventListener("click", () => {
    // Define is there  an 'expend' class and add it if is'nt
    if (navUl.className === "toggle") {
      navUl.className += ` expend`;
    } else {
      navUl.className = "toggle";
    }
  });
};

const closeNave = () =>
  navbarA.forEach((nav) => {
    nav.addEventListener("click", () => {
      navUl.className += ` expend`;
    });
  });
toggleNav();
closeNave();
let prevScrollpos = window.pageYOffset;
// Timer to store value when scroll stoped
let scrollTimer = null;

window.onscroll = () => {
  if (window.scrollY > 550) {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
  }
};
// Selecte all sections
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");

// Remove Class "active"
const removActive = (links) => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
};

const addActive = (link) => {
  link.classList.add("active");
};
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    removActive(links);
    const section = document.querySelector(link.getAttribute("href"));
    addActive(link);
    sections.forEach((element) => {
      element.classList.remove("active-section");
    });
    section.classList.add("active-section");
  });
});

// Add class 'active' to section when near top of viewport
const activeSection = () => {
  // Get the page Y offset
  const pageOffset = window.pageYOffset;
  // Test what section is shown now
  for (const section of sections) {
    // Remove 'active' claas from all sections
    sections.forEach((section) => {
      section.classList.remove("active-section");
    });
    //
    if (pageOffset < 100) {
      // Remove 'active' class from all links
      removActive(links);
    }
    if (
      pageOffset <= section.offsetTop + section.offsetHeight - 100 &&
      pageOffset > 400
    ) {
      // Add 'active' claas to current section
      section.classList.add("active-section");
      const datatext = section.getAttribute("data-nav");
      const activeA = document.querySelector(`[href='#${datatext}']`);
      removActive(links);
      if (activeA != null) {
        addActive(activeA);
      }
      break;
    }
  }
};
// Set sections as active
window.addEventListener("scroll", activeSection);

/* End Nav Bar */

/* Start slides*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/* End slides*/
