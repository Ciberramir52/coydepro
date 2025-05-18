import AccordionItem from "../components/AccordionItem";
import IndustryCard from "../components/IndustryCard";

const services = [
    {
        icon: "bi-gear-fill",
        title: "Optimización de Procesos",
        description: "Analizamos y rediseñamos los procesos productivos para eliminar ineficiencias, reducir costos y mejorar la productividad, adaptándonos a las necesidades específicas de cada cliente.",
        benefits: [
            "Reducción de tiempos de ciclo y desperdicios",
            "Ahorro de costos operativos",
            "Mayor calidad y consistencia en la producción",
            "Adaptabilidad a cambios en la demanda o tecnología"
        ],
        explanation: [
            "Diagnóstico y levantamiento de procesos actuales",
            "Identificación de áreas de mejora y cuellos de botella",
            "Propuesta de rediseño y optimización",
            "Implementación y capacitación",
            "Seguimiento y mejora continua"
        ]
    },
    {
        icon: "bi-folder-fill",
        title: "Gestión de Activos",
        description: "Implementamos sistemas y estrategias para maximizar la vida útil, disponibilidad y eficiencia de los activos industriales, asegurando una gestión óptima y rentable.",
        benefits: [
            "Mayor disponibilidad y confiabilidad de equipos",
            "Reducción de paros no programados",
            "Optimización de costos de mantenimiento",
            "Información precisa para la toma de decisiones"
        ],
        explanation: [
            "Evaluación del inventario y estado de activos",
            "Desarrollo de estrategias de mantenimiento",
            "Implementación de sistemas de monitoreo",
            "Capacitación del personal",
            "Análisis de resultados y mejora continua"
        ]
    },
    {
        icon: "bi-robot",
        title: "Automatización e Instrumentación",
        description: "Diseñamos e integramos soluciones de automatización e instrumentación para mejorar la eficiencia, seguridad y control de los procesos industriales.",
        benefits: [
            "Procesos más ágiles y precisos",
            "Reducción de errores humanos",
            "Mayor seguridad operativa",
            "Integración de tecnologías con la Industria"
        ],
        explanation: [
            "Análisis de procesos y necesidades de automatización",
            "Diseño de soluciones personalizadas",
            "Selección e integración de equipos",
            "Puesta en marcha y pruebas",
            "Capacitación y soporte post-implementación"
        ]
    },
    {
        icon: "bi-mortarboard-fill",
        title: "Capacitación y Desarrollo de Personal",
        description: "Ofrecemos programas de formación y desarrollo adaptados a las necesidades del personal, enfocados en nuevas tecnologías, mejores prácticas y cumplimiento normativo.",
        benefits: [
            "Personal más capacitado y motivado",
            "Reducción de errores y accidentes",
            "Mayor cumplimiento de estándares de calidad y seguridad",
            "Adaptación rápida a cambios tecnológicos"
        ],
        explanation: [
            "Detección de necesidades de capacitación",
            "Diseño de programas personalizados",
            "Ejecución de cursos teóricos y prácticos",
            "Evaluación de resultados",
            "Seguimiento y actualización continua."
        ]
    },
    {
        icon: "bi-graph-up-arrow",
        title: "Gestión y Desarrollo de Proyectos",
        description: "Gestionamos y desarrollamos proyectos industriales desde la planeación hasta la ejecución, asegurando cumplimiento de tiempos, costos y calidad.",
        benefits: [
            "Proyectos entregados en tiempo y forma",
            "Control eficiente de recursos y presupuesto",
            "Minimización de riesgos y desviaciones",
            "Comunicación clara y seguimiento continuo"
        ],
        explanation: [
            "Definición de objetivos y alcance del proyecto",
            "Planeación detallada y asignación de recursos",
            "Ejecución y supervisión de actividades",
            "Control de avances y ajustes",
            "Cierre, entrega y evaluación de resultados"
        ]
    }
]

const industries = [
    {
        icon: "bi-fork-knife",
        title: "Alimentos y Bebidas",
        description: "Soluciones para optimizar líneas de producción, asegurar la inocuidad, y cumplir normativas en la industria alimentaria y de bebidas."
    },
    {
        icon: "bi-capsule-pill",
        title: "Farmacéutica",
        description: "Consultoría en automatización, control de calidad y cumplimiento regulatorio para laboratorios y fabricantes farmacéuticos."
    },
    {
        icon: "bi-buildings-fill",
        title: "Electrónica",
        description: "Ingeniería y mejora de procesos para la fabricación de componentes electrónicos, con enfoque en precisión y trazabilidad."
    },
    {
        icon: "bi-car-front-fill",
        title: "Automotriz",
        description: "Soluciones para la automatización, balanceo de líneas y gestión de calidad en la industria automotriz."
    },
    {
        icon: "bi-beaker-fill",
        title: "Química",
        description: "Implementación de sistemas de control, seguridad y optimización de procesos en la industria química."
    }
]

function ServicePage() {
    return (
        <>
            <div style={{ minWidth: "400px" }} className="container-fluid my-5p w-80">
                <div style={{ background: "#fff" }} className="row">
                    <img style={{ objectFit: "cover" }} src="/src/assets/images/ServiceBanner.png" alt="" className="col-12 col-lg-8" />
                    <div className="col-12 col-lg-4 p-4 d-flex flex-column justify-content-center align-items-start gap-5">
                        <p className="fs-4 col-12">En Coydepro, brindamos soluciones integrales de ingeniería y consultoría para optimizar procesos, maximizar la eficiencia y asegurar la calidad en la industria. Nuestro enfoque personalizado, el uso de tecnología de punta y un equipo multidisciplinario nos permiten resolver los retos más complejos de nuestros clientes.</p>
                        <a href='#start-analysis' className='btn btn-primary btn-lg w-auto px-4 py-3 text-light fs-3 fw-bold f-title'>Agenda con nosotros</a>
                    </div>
                </div>
            </div>
            <div className="container my-10p">
                <div className="accordion" id="accordionExample">
                    {
                        services.map(service => <AccordionItem {...service} />)
                    }
                </div>
            </div>
            <div style={{ minWidth: "400px" }} className="container-fluid w-80">
                <div className="row gx-5 gy-5">
                    {
                        industries.map(industry => <IndustryCard {...industry} />)
                    }
                </div>
            </div>
        </>
    );
}

export default ServicePage;