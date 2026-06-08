// NAVEGACIÓN Y ANIMACIONES
document.addEventListener('DOMContentLoaded', () => {
    
    // Función de filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Efecto de scroll en la barra de navegación
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(128, 0, 0, 0.95)';
            nav.style.padding = '0.7rem 5%';
        } else {
            nav.style.background = 'var(--primary)';
            nav.style.padding = '1rem 5%';
        }
    });
});

// FUNCIÓN PARA MOSTRAR DETALLES DE LÍNEAS (Simulación de Modal)
function showDetail(lineId) {
    alert("Cargando información detallada de la línea de investigación extraída de las matrices de competencias [7-9]...");
}

// Animación simple de aparición
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);