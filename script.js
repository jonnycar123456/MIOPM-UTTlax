// CONTROL DEL SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);

// DATOS DE LÍNEAS (LGAC)
const lineData = {
    gestion: {
        title: "Gestión de Proyectos",
        desc: "Optimización de recursos y rentabilidad industrial mediante estándares de calidad.",
        curriculum: ["Administración para Ingenieros", "Análisis Financiero", "Planeación Estratégica", "Análisis de Operaciones"]
    },
    iiot: {
        title: "Internet Industrial de las Cosas (IIoT)",
        desc: "Implementación de sistemas ciberfísicos y Big Data para la industria 4.0.",
        curriculum: ["Industria 4.0", "Big Data", "Sistemas Ciberfísicos", "Control Inteligente"]
    },
    sostenibilidad: {
        title: "Procesos Industriales Sostenibles",
        desc: "Desarrollo de sistemas productivos con mínimo impacto ambiental y eficiencia energética.",
        curriculum: ["Economía Circular", "Energías Renovables", "Gestión de Capital Humano", "Ingeniería Sostenible"]
    },
    fabricacion: {
        title: "Procesos de Fabricación",
        desc: "Diseño y mejora de métodos de manufactura y metrología avanzada.",
        curriculum: ["Metrología Avanzada", "Materiales Comerciales", "Manufactura Esbelta", "Optimización de Operaciones"]
    },
    simulacion: {
        title: "Simulación Productiva",
        desc: "Modelado virtual para la toma de decisiones estratégicas en planta.",
        curriculum: ["Modelado Discreto", "Diseño Mecánico CAD", "Simulación Estadística", "Algoritmos Lineales"]
    }
};

// DATOS DE DOCENTES
const profData = {
    galaviz: {
        name: "Dr. José Víctor Galaviz Rodríguez",
        cv: "Doctor en Planeación Estratégica. Líder del Cuerpo Académico Ingeniería en Procesos.",
        projects: ["Patente: Máquina de selección de semillas.", "Desarrollo de deshidratadores solares industriales."]
    },
    sonia: {
        name: "Dra. Sonia López Rodríguez",
        cv: "Doctora en Tecnología e Innovación. Experta en Ciencias Inmersivas y transferencia tecnológica.",
        projects: ["Aplicaciones de RA/RV para preservación cultural.", "Automatización de gestión en SMP Automotive."]
    },
    javier: {
        name: "Dr. Francisco Javier Espinosa Moreno",
        cv: "Dr. en Ciencias en Energía Renovable. Miembro del SNII especializado en sustentabilidad.",
        projects: ["Investigación en Producción de Hidrógeno Verde.", "Modelado de sistemas de electrometanogénesis."]
    },
    corona: {
        name: "Dr. José Luis Hernández Corona",
        cv: "Dr. en Ciencias en Sistemas Computacionales. Experto en instrumentación inteligente.",
        projects: ["Identificación de Robot Manipulador CRS A465.", "Diseño de molinos residuales sostenibles."]
    },
    roman: {
        name: "Dr. Román Daniel Romero Mitre",
        cv: "Dr. en Manufactura Avanzada. Especialista en optimización de procesos de maquinado CNC.",
        projects: ["Análisis de vida útil de herramientas de corte.", "Optimización de corte de metales por láser."]
    },
    jonny: {
        name: "M.I. Jonny Carmona Reyes",
        cv: "Mtro. en Automatización y Control. Experto en scripting para automatización educativa.",
        projects: ["Modelos predictivos contra la deserción escolar.", "Plataformas de tutoría inteligente."]
    },
    ricardo: {
        name: "M. en C. Ricardo Ramos Aguilar",
        cv: "Mtro. en Sistemas Computacionales. Candidato al SNI. Experto en Machine Learning.",
        projects: ["Análisis de bioseñales para salud.", "Few-shot learning para lenguas indígenas."]
    }
};

const modal = document.getElementById("infoModal");
const body = document.getElementById("modalBody");

function openModal(id) {
    const data = lineData[id];
    body.innerHTML = `
        <h2 style="color:var(--primary)">${data.title}</h2>
        <p><strong>Enfoque:</strong> ${data.desc}</p>
        <hr>
        <h3>Mapa Curricular Sugerido</h3>
        <table class="curriculum-table">
            <tr><th>Eje Formativo</th><th>Asignatura Clave</th></tr>
            ${data.curriculum.map(m => `<tr><td>Especialización</td><td>${m}</td></tr>`).join('')}
            <tr><td>Transversal</td><td>Ética y Matemáticas Avanzadas</td></tr>
        </table>`;
    modal.style.display = "block";
}

function openProfModal(id) {
    const data = profData[id];
    body.innerHTML = `
        <h2 style="color:var(--primary)">${data.name}</h2>
        <p><strong>Resumen:</strong> ${data.cv}</p>
        <hr>
        <h3>Proyectos Recientes</h3>
        <ul>${data.projects.map(p => `<li>${p}</li>`).join('')}</ul>`;
    modal.style.display = "block";
}

function closeModal() { modal.style.display = "none"; }
window.onclick = (e) => { if(e.target == modal) closeModal(); }
