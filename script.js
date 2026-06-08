let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// CAMBIO DE SLIDE (MANUAL Y AUTOMÁTICO)
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => changeSlide(1), 5000); // Cambio cada 5 segundos

// FUNCIÓN ZOOM DE IMAGEN
function zoomImage() {
    const activeSlide = document.querySelector('.slide.active');
    let bgImage = activeSlide.style.backgroundImage;
    let url = bgImage.replace('url("', '').replace('")', '').replace('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ', '');
    
    document.getElementById("modalBody").innerHTML = `<img src="${url}" style="width:100%">`;
    document.getElementById("infoModal").style.display = "block";
}

// DATOS DE DOCENTES (Ejemplo de 2, debes completar los 7)
const profData = {
    galaviz: { name: "Dr. José Víctor Galaviz Rodríguez", cv: "Doctor en Planeación Estratégica. Líder de Cuerpo Académico.", projects: ["Patente: Máquina de selección de semillas."] },
    sonia: { name: "Dra. Sonia López Rodríguez", cv: "Doctora en Tecnología. Experta en Realidad Virtual.", projects: ["RA para preservación de lenguas indígenas."] }
    // Agregar javier, corona, roman, jonny y ricardo siguiendo el mismo formato
};

function openProfModal(id) {
    const data = profData[id];
    document.getElementById("modalBody").innerHTML = `<h2>${data.name}</h2><p>${data.cv}</p><h3>Proyectos:</h3><ul>${data.projects.map(p => `<li>${p}</li>`).join('')}</ul>`;
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() { document.getElementById("infoModal").style.display = "none"; }