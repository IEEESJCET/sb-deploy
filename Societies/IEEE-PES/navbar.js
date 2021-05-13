/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("nav");
      var logo = document.querySelector("#nav-logo");
      var navLinks = document.querySelectorAll(".nav__link");
      nav.classList.toggle("sticky", window.scrollY > 100);
      logo.classList.add("filter", scrollY > 100);

      if (scrollY < 100) {
        logo.classList.remove("filter");
      }
    });

    console.log("Media Query Matched!");
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
