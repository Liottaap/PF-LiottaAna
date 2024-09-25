document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los enlaces de la pestaña
    const tabLinks = document.querySelectorAll('.tab-link');
    // Seleccionar todos los contenedores
    const containers = document.querySelectorAll('.nuevo-container, .destacados-container, .promos-container');

    // Función para ocultar todos los contenedores
    const hideAllContainers = () => {
        containers.forEach(container => {
            container.style.display = 'none';
            container.style.opacity = '0'; // Añadir opacidad cero para la transición
        });
    };

    // Función para mostrar el contenedor correspondiente
    const showContainer = (target) => {
        const selectedContainer = document.getElementById(target);
        if (selectedContainer) {
            selectedContainer.style.display = 'flex'; // Mostrar el contenedor
            selectedContainer.style.opacity = '1'; // Establecer opacidad a 1
        }
    };

    // Agregar evento click a cada enlace
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const target = link.getAttribute('data-target'); // Obtener el target del atributo data
            hideAllContainers(); // Ocultar todos los contenedores
            showContainer(target); // Mostrar el contenedor correspondiente
        });
    });
});