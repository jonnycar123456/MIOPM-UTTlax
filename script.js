let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// LOGICA DEL SLIDER
function changeSlide(direction) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

let autoSlide = setInterval(() => changeSlide(1), 5000);

function manualChange(dir) {
    clearInterval(autoSlide);
    changeSlide(dir);
    autoSlide = setInterval(() => changeSlide(1), 5000);
}

// ZOOM DE IMAGEN
function zoomImage() {
    const activeSlide = document.querySelector('.slide.active');
    let bgImage = activeSlide.style.backgroundImage;
    let url = bgImage.replace('url("', '').replace('")', '').replace('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ', '');
    
    document.getElementById("modalBody").innerHTML = `<h3 style="margin-bottom:15px; color:var(--primary)">Vista General</h3><img src="${url}" style="width:100%; border-radius:10px;">`;
    document.getElementById("infoModal").style.display = "block";
}

// DATOS DE LÍNEAS (Basado en PE 2024)
const lineData = {
    gestion: { title: "Gestión de Proyectos", desc: "Estructuración de proyectos productivos con rentabilidad.", curriculum: ["Administración para Ingenieros", "Análisis Financiero", "Planeación Estratégica"] },
    iiot: { title: "Internet Industrial de las Cosas", desc: "Integración de sistemas ciberfísicos e Industria 4.0.", curriculum: ["Industria 4.0", "Big Data", "Sistemas Ciberfísicos"] },
    sostenibilidad: { title: "Procesos Sostenibles", desc: "Optimización mediante economía circular.", curriculum: ["Economía Circular", "Energías Renovables", "Gestión de Capital Humano"] },
    fabricacion: { title: "Procesos de Fabricación", desc: "Mejora de métodos de manufactura y metrología.", curriculum: ["Metrología Avanzada", "Materiales Comerciales", "Manufactura Esbelta"] },
    simulacion: { title: "Simulación Productiva", desc: "Modelado virtual para toma de decisiones.", curriculum: ["Modelado Discreto", "Diseño Mecánico CAD", "Simulación Estadística"] }
};

// DATOS DE DOCENTES (Extraído de CVs)
const profData = {
    galaviz: { name: "Dr. José Víctor Galaviz Rodríguez", cv: "Doctor en Planeación Estratégica. Líder del CA Ingeniería en Procesos.", projects: ["Patente: Máquina de selección de semillas.", "Deshidratadores solares industriales."] },
    sonia: { name: "Dra. Sonia López Rodríguez", cv: "Doctora en Tecnología e Innovación. Especialista en Ciencias Inmersivas.", projects: ["App de RA para preservación de lengua Otomí.", "Realidad Virtual en instalaciones NOM-001."] },
    javier: { name: "Dr. Francisco Javier Espinosa Moreno", cv: "Dr. en Ciencias en Energía Renovable. Investigador nivel SNII.", projects: ["Producción de hidrógeno a partir de glicerol.", "Modelado de electrometanogénesis."] },
    corona: { name: "Dr. José Luis Hernández Corona", cv: "Dr. en Ciencias en Sistemas Computacionales. Experto en Instrumentación.", projects: ["Identificación de Robot CRS A465.", "Sistemas de laboratorios remotos."] },
    roman: { name: "Dr. Román Daniel Romero Mitre", cv: "Doctor en Manufactura Avanzada. Experto en procesos de maquinado CNC.", projects: ["Análisis de vida útil de herramientas.", "Optimización de corte de metales por láser."] },
    jonny: { name: "M.I. Jonny Carmona Reyes", cv: "M.I. Automatización y Control. Experto en scripting para automatización educativa.", projects: ["Modelos predictivos contra deserción escolar.", "Plataformas de tutoría inteligente."] },
    ricardo: { name: "M.I. Ricardo Ramos Aguilar", cv: "Maestro en Sistemas Computacionales. Especialista en Machine Learning.", projects: ["Análisis de bioseñales para salud.", "Reconocimiento de emociones mediante ML."] }
};

function openModal(id) {
    const data = lineData[id];
    document.getElementById("modalBody").innerHTML = `<h2>${data.title}</h2><p><strong>Enfoque:</strong> ${data.desc}</p><hr><table class="curriculum-table"><tr><th>Ciclo</th><th>Asignatura Clave</th></tr>${data.curriculum.map(m => `<tr><td>Formación</td><td>${m}</td></tr>`).join('')}</table>`;
    document.getElementById("infoModal").style.display = "block";
}

function openProfModal(id) {
    const data = profData[id];
    document.getElementById("modalBody").innerHTML = `<h2>${data.name}</h2><p><strong>Perfil:</strong> ${data.cv}</p><hr><h3>Proyectos Recientes</h3><ul>${data.projects.map(p => `<li style="margin-top:10px">${p}</li>`).join('')}</ul>`;
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() { document.getElementById("infoModal").style.display = "none"; }
window.onclick = (e) => { if(e.target == document.getElementById("infoModal")) closeModal(); }