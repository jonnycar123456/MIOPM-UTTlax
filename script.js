// DATOS DE LÍNEAS DE INVESTIGACIÓN Y MATERIAS
const lineData = {
    gestion: {
        title: "Gestión de Proyectos",
        desc: "Estructuración de proyectos productivos con criterios de rentabilidad y mejora continua [11, 12].",
        curriculum: ["Administración para Ingenieros", "Análisis Financiero", "Planeación Estratégica", "Marco Legal de Proyectos"]
    },
    iiot: {
        title: "Internet Industrial de las Cosas (IIoT)",
        desc: "Integración de sensores y conectividad avanzada para la Industria 4.0 [10, 13].",
        curriculum: ["Big Data", "Sistemas Ciberfísicos", "Industria 4.0", "Control Inteligente"]
    },
    sostenibilidad: {
        title: "Procesos Industriales Sostenibles",
        desc: "Optimización mediante flujos sostenibles y economía circular [14, 15].",
        curriculum: ["Economía Circular", "Energías Renovables", "Gestión de Capital Humano", "Ingeniería Sostenible"]
    },
    fabricacion: {
        title: "Procesos de Fabricación",
        desc: "Mejora de métodos de manufactura y transformación de materiales [16, 17].",
        curriculum: ["Metrología Avanzada", "Materiales Comerciales", "Optimización de Operaciones", "Procesos de Manufactura"]
    },
    simulacion: {
        title: "Simulación Productiva",
        desc: "Modelado virtual y simulación estadística para toma de decisiones [18, 19].",
        curriculum: ["Modelado Discreto", "Diseño Mecánico CAD", "Algoritmos Lineales", "Simulación Estadística"]
    }
};

// DATOS DEL NÚCLEO ACADÉMICO
const profData = {
    galaviz: {
        name: "Dr. José Víctor Galaviz Rodríguez",
        cv: "Doctor en Planeación Estratégica. Líder del Cuerpo Académico [8, 20].",
        lines: "Ingeniería en Procesos y Sostenibilidad.",
        projects: ["Patente: Máquina de selección de semillas [1].", "Sostenibilidad de cadena agroalimentaria [21]."]
    },
    sonia: {
        name: "Dra. Sonia López Rodríguez",
        cv: "Doctora en Tecnología e Innovación. Experta en Ciencias Inmersivas [9].",
        lines: "Industria 4.0, RA y RV.",
        projects: ["App de Realidad Aumentada para plantas medicinales [4].", "Preservación del idioma Otomí mediante software [22]."]
    },
    javier: {
        name: "Dr. Francisco Javier Espinosa Moreno",
        cv: "Dr. en Ciencias en Energía Renovable. Miembro del SNII [3].",
        lines: "Sistemas Energéticos Sustentables.",
        projects: ["Producción de Hidrógeno Verde [3].", "Modelado de sistemas de electrometanogénesis."]
    },
    corona: {
        name: "Dr. José Luis Hernández Corona",
        cv: "Dr. en Sistemas Computacionales. Especialista en Instrumentación [23].",
        lines: "Automatización y Mecatrónica.",
        projects: ["Identificación de Robot CRS A465 [23].", "Desarrollo de laboratorios remotos [24]."]
    },
    roman: {
        name: "Dr. Román Daniel Romero Mitre",
        cv: "Dr. en Manufactura Avanzada. Experto en CAD/CAM/CNC [7].",
        lines: "Optimización de procesos de maquinado.",
        projects: ["Análisis de vida de herramientas de corte [25].", "Diseño industrial de soportes para dispositivos [26]."]
    },
    jonny: {
        name: "M.I. Jonny Carmona Reyes",
        cv: "Maestro en Automatización y Control [27].",
        lines: "Diseño Instruccional 4.0 y Tutoría Inteligente.",
        projects: ["Sistemas de detección de objetos con Raspberry [28].", "Modelos contra la deserción escolar [29]."]
    },
    ricardo: {
        name: "M. en C. Ricardo Ramos Aguilar",
        cv: "Mtro. en Sistemas Computacionales. Candidato al SNI [30].",
        lines: "Inteligencia Artificial y Procesamiento de Señales.",
        projects: ["Análisis de bioseñales para salud.", "Reconocimiento de emociones mediante Machine Learning [31]."]
    }
};

// FUNCIONES PARA CONTROL DE MODALES
const modal = document.getElementById("infoModal");
const body = document.getElementById("modalBody");

function openModal(id) {
    const data = lineData[id];
    body.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Descripción:</strong> ${data.desc}</p>
        <hr>
        <h3>Materias de Especialidad</h3>
        <table class="curriculum-table">
            <tr><th>Ciclo</th><th>Asignatura</th></tr>
            ${data.curriculum.map(m => `<tr><td>Formación</td><td>${m}</td></tr>`).join('')}
            <tr><td>Transversal</td><td>Ética y Lean Manufacturing</td></tr>
        </table>
    `;
    modal.style.display = "block";
}

function openProfModal(id) {
    const data = profData[id];
    body.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Resumen CV:</strong> ${data.cv}</p>
        <p><strong>Líneas de Trabajo:</strong> ${data.lines}</p>
        <hr>
        <h3>Proyectos Actuales</h3>
        <ul>${data.projects.map(p => `<li>${p}</li>`).join('')}</ul>
    `;
    modal.style.display = "block";
}

function closeModal() { modal.style.display = "none"; }

window.onclick = function(event) { if (event.target == modal) closeModal(); }
