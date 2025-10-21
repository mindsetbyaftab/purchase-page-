document.addEventListener("DOMContentLoaded", () => {
  // header load
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;

      // mobile menu toggle
      const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");
      if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("show");
        });
      }
    });

  // footer load
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
      const year = document.getElementById("year");
      if (year) year.textContent = new Date().getFullYear();
    });
});
