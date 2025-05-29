import consultoriaImage from '/src/assets/images/Consultoria.png';
import gestionImage from '/src/assets/images/Gestion-copy.jpg';
import automatizacionImage from '/src/assets/images/Automatizacion-copy.png';
import capacitacionImage from '/src/assets/images/Capacitacion.png';
import heroBanner from '/src/assets/images/Banner.jpg';

export const services = [
    {
        title: 'Consultoría',
        img: consultoriaImage,
        description: 'Optimización de procesos, mejora continua y reingeniería para aumentar la eficiencia y reducir costos.'
    },
    {
        title: 'Gestión',
        img: gestionImage,
        description: 'Planeación, supervisión y ejecución de proyectos industriales con prácticas eficientes y consistentes.'
    },
    {
        title: 'Automatización',
        img: automatizacionImage,
        description: 'Integración de tecnología, automatización y documentación para una operación segura y eficiente.'
    },
    {
        title: 'Capacitación',
        img: capacitacionImage,
        description: 'Programas de formación para equipos industriales, enfocados en nuevas tecnologías y mejores prácticas.'
    },
]

export const tabs = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Servicios',
        to: '/servicios'
    },
    {
        title: 'Contacto',
        to: '/contacto'
    },
    {
        title: 'Nosotros',
        to: '/nosotros'
    }
]

export const bannerContent = {
    img: heroBanner,
    title: 'Soluciones de ingeniería y consultoría para la excelencia industrial',
    description: 'Coydepro ayuda a empresas industriales a optimizar procesos, desarrollar nuevos productos y mejorar la gestión de activos mediante consultoría, ingeniería y capacitación especializada.',
    cto: 'Contáctanos hoy'
}

export const contact = [
    {
        subject: 'Email',
        content: 'ramiro.ruiz@coydepro.com.mx'
    },
    {
        subject: 'Teléfono',
        content: '331 221 4032'
    }
]

export const cardList = {
    header: '¿Por qué COYDEPRO?',
    list: [
        'Soluciones 100% personalizadas para cada cliente',
        'Integración de tecnología de punta',
        'Trato humano y cercano',
        'Equipo con experiencia multidisciplinaria',
        'Compromiso con la honestidad, integridad y responsabilidad'
    ],
    cardId: 'coydepro-card'
}