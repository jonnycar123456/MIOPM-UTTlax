let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Lógica para cambiar de imagen
function changeSlide(direction) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Slider automático
setInterval(() => changeSlide(1), 5000);

// Zoom de imagen
function zoomImage() {
    const activeSlide = document.querySelector('.slide.active');
    let bgImage = activeSlide.style.backgroundImage;
    let url = bgImage.replace('url("', '').replace('")', '').replace('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ', '');
    
    document.getElementById("modalBody").innerHTML = `<img src="${url}" style="width:100%">`;
    document.getElementById("infoModal").style.display = "block";
}

// Datos de docentes
const profData = {
    galaviz: { name: "Dr. José Víctor Galaviz Rodríguez", cv: "Líder de Investigación." },
    sonia: { name: "Dra. Sonia López Rodríguez", cv: "Doctora en Tecnología." },
    javier: { name: "Dr. Francisco Javier Espinosa Moreno", cv: "Especialista en Energía." },
    corona: { name: "Dr. José Luis Hernández Corona", cv: "Experto en Automatización." },
    roman: { name: "Dr. Román Daniel Romero Mitre", cv: "Especialista en CNC." },
    jonny: { name: "M.I. Jonny Carmona Reyes", cv: "Experto en Automatización Educativa." },
    ricardo: { name: "M.I. Ricardo Ramos Aguilar", cv: "Especialista en Machine Learning." }
};

function openProfModal(id) {
    const data = profData[id];
    document.getElementById("modalBody").innerHTML = `<h2>${data.name}</h2><p>${data.cv}</p>`;
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() { document.getElementById("infoModal").style.display = "none"; }
