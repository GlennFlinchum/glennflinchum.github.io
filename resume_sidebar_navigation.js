/* 
    This document is under construction!!!
    Used for sidebar navigation.
*/

document.addEventListener("DOMContentLoaded", () => {
    const targetSections = document.querySelectorAll(".mainContent article, #intro");
    const sidebarLinks = document.querySelectorAll(".sidebar .nav-links a");
    const sidebar = document.querySelector(".sidebar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
  
    // Toggle mobile menu open/close
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
            sidebar.classList.toggle("menu-open");
        });
    }

    // Close menu automatically when a navigation link is clicked on mobile
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (sidebar.classList.contains("menu-open")) {
                sidebar.classList.remove("menu-open");
            }
        });
    });

    const options = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", 
      threshold: 0
    };
  
    const scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          
          sidebarLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, options);
  
    targetSections.forEach((section) => scrollSpyObserver.observe(section));
});