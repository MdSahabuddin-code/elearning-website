document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("nav.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load nav");
      return response.text();
    })
    .then(data => {
      navbarContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Navbar load error:", error);
      navbarContainer.innerHTML = `
        <nav id="navbar">
          <div id="logo">
            <img src="logo/logo.png" alt="E-learning Logo" style="height:50px;">
          </div>
          <div id="nav-links">
            <a href="index.html">Home</a>
            <a href="courses.html">Courses</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
        </nav>
      `;
    });
});
