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
          navLinks.classList.toggle("show");        // slide menu
          hamburger.classList.toggle("active");     // hamburger → cross
          console.log("👆 Hamburger clicked, nav-links classList:", navLinks.classList);
        });
      } else {
        console.error("❌ Could not find hamburger or nav-links");
      }
    })
    .catch(err => console.error("❌ Navbar load failed:", err));
});
