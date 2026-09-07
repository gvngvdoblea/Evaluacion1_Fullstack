const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", function() {
    navLinks.classList.toggle("activo");
  });
}