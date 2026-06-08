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

function zoomImage() {
    // 1. Buscamos la imagen que tiene la clase 'active' en ese momento
    const activeSlide = document.querySelector('.slide.active');
    
    // 2. Extraemos la URL de la imagen de fondo
    // Esta línea limpia el texto "url('...')" para obtener solo el link
    let bgImage = activeSlide.style.backgroundImage;
    let imageUrl = bgImage.replace('url("', '').replace('")', '').replace('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ', '');

    // 3. Obtenemos el modal y el cuerpo del modal
    const modal = document.getElementById("infoModal");
    const body = document.getElementById("modalBody");

    // 4. Insertamos la imagen en el modal y lo mostramos
    body.innerHTML = `
        <h3 style="margin-bottom:15px; color:var(--primary);">Vista de Actividad</h3>
        <img src="${imageUrl}" alt="Vista ampliada">
    `;
    modal.style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Función manual para las flechas
function changeSlide(direction) {
    // 1. Quitar la clase active de la imagen actual
    slides[currentSlide].classList.remove('active');
    
    // 2. Calcular la nueva posición (adelante o atrás)
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // 3. Mostrar la nueva imagen
    slides[currentSlide].classList.add('active');
}

// Función automática (cada 5 segundos)
setInterval(() => {
    changeSlide(1);
}, 5000);

// Mantener las funciones de los modales que ya tenías (Líneas y Profesores)
function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

window.onclick = (e) => {
    const modal = document.getElementById("infoModal");
    if(e.target == modal) closeModal();
}