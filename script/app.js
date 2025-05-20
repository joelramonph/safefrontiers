document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleccionar el menú de navegación
    const mainNav = document.querySelector('.main-nav');

    // Verificar que los elementos existan antes de añadir el event listener
    if (menuToggle && mainNav) {
        // Añadir un "escuchador de eventos" (event listener) para el clic
        menuToggle.addEventListener('click', function() {
            // Alternar la clase 'is-active' en el botón (para la animación de la X)
            this.classList.toggle('is-active');
            // Alternar la clase 'is-open' en el menú de navegación (para mostrar/ocultar)
            mainNav.classList.toggle('is-open');

            // Opcional: Para accesibilidad, alternar el atributo aria-expanded
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

//desplazamiento natural

document.querySelectorAll('a[href^="#quienes-somos"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('a[href^="#proyectos"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('a[href^="#nuestro-objetivo"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('a[href^="#contactanos"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});