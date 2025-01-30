// Mostrar el mensaje de bienvenida
function showWelcomeMessage() {
    alert('¡Bienvenido al análisis FODA del grupo!');
}

// scroll suave para los enlaces del menú
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
