// foot.js
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer");

  fetch("foot.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load footer");
      return response.text();
    })
    .then(data => {
      footerContainer.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
      footerContainer.innerHTML = "<p style='color:red;'>Error loading footer.</p>";
    });
});
