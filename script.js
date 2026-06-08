// CONTROL DEL SLIDER AUTOMÁTICO
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    // Si no hay slides, no hacer nada
    if (slides.length === 0) return;
    
    // Quitar la clase 'active' de la imagen actual
    slides[currentSlide].classList.remove('active');
    
    // Calcular el índice de la siguiente imagen
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Añadir la clase 'active' a la nueva imagen
    slides[currentSlide].classList.add('active');
}

// Iniciar el cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Mantener las funciones de los modales que ya tenías (Líneas y Profesores)
function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

window.onclick = (e) => {
    const modal = document.getElementById("infoModal");
    if(e.target == modal) closeModal();
}
