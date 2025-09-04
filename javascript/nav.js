document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  // Load navbar
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;
      console.log("✅ Navbar injected");

      // Select elements AFTER injection
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.getElementById("nav-links");

      console.log("📌 Found hamburger:", hamburger);
      console.log("📌 Found navLinks:", navLinks);

      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("show");
          console.log("👆 Hamburger clicked, nav-links classList:", navLinks.classList);
          console.log("📐 Computed transform:", getComputedStyle(navLinks).transform);
        });
      } else {
        console.error("❌ Could not find hamburger or nav-links");
      }
    });
});
