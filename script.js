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

// Animación simple de aparición
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);

// FUNCIÓN PARA MOSTRAR DETALLES DE LÍNEAS (Simulación de Modal)
function showDetail(lineId) {
    alert("Cargando información detallada de la línea de investigación extraída de las matrices de competencias [7-9]...");
}

const lineData = {
    gestion: {
        title: "Gestión de Proyectos",
        desc: "Se enfoca en la estructuración de proyectos productivos con criterios de rentabilidad y mejora continua [1]. Busca administrar recursos humanos y tecnológicos para el cumplimiento de objetivos organizacionales [11].",
        curriculum: ["Administración para Ingenieros", "Planeación Estratégica y Análisis de Operaciones", "Marco Legal para Desarrollo de Proyectos", "Técnicas para la Solución de Problemas [10]"]
    },
    iiot: {
        title: "Internet Industrial de las Cosas (IIoT)",
        desc: "Desarrolla modelos tecnológicos para el flujo de procesos mediante la interacción humano-máquina y tecnologías de conectividad avanzada [12]. Implementa soluciones de Industria 4.0 y Big Data [13].",
        curriculum: ["Industria 4.0 y Transformación Digital", "Big Data", "Sistemas Ciberfísicos y IIoT", "Diseño de Sistemas de Control Inteligente [13]"]
    },
    sostenibilidad: {
        title: "Procesos Industriales Sostenibles",
        desc: "Optimiza sistemas industriales bajo un enfoque de flujos sostenibles y economía circular para minimizar el impacto ambiental [14, 15].",
        curriculum: ["Economía Circular", "Desarrollo de Productos Innovadores", "Planeación Estratégica", "Gestión de Capital Humano [16]"]
    },
    fabricacion: {
        title: "Procesos de Fabricación",
        desc: "Diseña y mejora métodos de manufactura y transformación de materiales, asegurando la calidad y eficiencia mediante metrología avanzada [17, 18].",
        curriculum: ["Propiedades de los Materiales Comerciales", "Metrología Avanzada", "Procesos de Fabricación I y II", "Optimización de Operaciones en Talleres [18]"]
    },
    simulacion: {
        title: "Simulación Productiva",
        desc: "Utiliza herramientas de modelado virtual (CAD/CAM/CAE) y simulación estadística para la toma de decisiones estratégicas en planta [9, 19].",
        curriculum: ["Modelos y Simulación Estadística", "Simulación de Sistemas de Control", "Sistemas de Modelado Discreto", "Diseño Mecánico Avanzado [9]"]
    }
};

function openModal(id) {
    const data = lineData[id];
    const modal = document.getElementById("lineModal");
    const body = document.getElementById("modalBody");

    body.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Descripción:</strong> ${data.desc}</p>
        <h3>Materias de Especialidad (Plan de Estudios)</h3>
        <table class="curriculum-table">
            <thead>
                <tr><th>Ciclo de Formación</th><th>Asignaturas Clave</th></tr>
            </thead>
            <tbody>
                ${data.curriculum.map(sub => `<tr><td>Especialización</td><td>${sub}</td></tr>`).join('')}
                <tr><td>Transversales</td><td>Ética, Matemáticas Avanzadas, Lean Manufacturing [13]</td></tr>
            </tbody>
        </table>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("lineModal").style.display = "none";
}

// Cerrar si se hace clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById("lineModal");
    if (event.target == modal) { modal.style.display = "none"; }
}
