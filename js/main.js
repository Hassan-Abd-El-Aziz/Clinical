document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  // Check for saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    html.classList.add("dark");
  }

  darkModeToggle.addEventListener("click", function () {
    html.classList.toggle("dark");

    // Save user preference
    if (html.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        mobileMenu.classList.add("hidden");

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Back to Top Button
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.remove("opacity-100", "visible");
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show an alert
      alert("شكرا لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.");
      contactForm.reset();
    });
  }

  // Active Navigation Link Highlighting
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    const fromTop = window.scrollY + 100;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("bg-primary", "text-white");
        link.classList.remove("hover:bg-primary", "hover:text-white");
      } else {
        link.classList.remove("bg-primary", "text-white");
        link.classList.add("hover:bg-primary", "hover:text-white");
      }
    });
  });
});
