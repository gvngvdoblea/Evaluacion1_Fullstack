const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", function() {
    navLinks.classList.toggle("activo");
  });
}

const btnCarrito = document.getElementById("btnCarrito");

if (btnCarrito) {
  btnCarrito.addEventListener("click", function() {
    alert("El carrito está vacío. ¡Pronto podrás realizar tus pedidos!");
  });
}

const formLogin = document.getElementById("formLogin");

if (formLogin) {
  formLogin.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Sesión iniciada con éxito!");
    formLogin.reset();
    window.location.href = "../index.html";
  });
}

const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
  formRegistro.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Usuario registrado con éxito! Ahora puedes iniciar sesión.");
    formRegistro.reset();
    window.location.href = "./crearUsuario.html";
  });
}