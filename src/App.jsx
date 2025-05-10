import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/styles.scss'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import consultoriaImage from '/src/assets/images/Consultoria.png';
import gestionImage from '/src/assets/images/Gestion-copy.jpg';
import automatizacionImage from '/src/assets/images/Automatizacion-copy.png';
import capacitacionImage from '/src/assets/images/Capacitacion.png';
import heroBanner from '/src/assets/images/Banner.jpg';
import ToggleList from './components/ToggleList';
import MainFooter from './components/MainFooter';
import ToogleSection from './components/ToggleSection';
import Clients from './components/Clients';


const services = [
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

const tabs = [
  {
    title: 'Home'
  },
  {
    title: 'Servicios'
  },
  {
    title: 'Contacto'
  },
  {
    title: 'Nosotros'
  }
]

const bannerContent = {
  img: heroBanner,
  title: 'Soluciones de ingeniería y consultoría para la excelencia industrial',
  description: 'Coydepro ayuda a empresas industriales a optimizar procesos, desarrollar nuevos productos y mejorar la gestión de activos mediante consultoría, ingeniería y capacitación especializada.',
  cto: 'Contáctanos hoy'
}

const contact = [
  {
    subject: 'Email',
    content: 'ramiro.ruiz@coydepro.com.mx'
  },
  {
    subject: 'Teléfono',
    content: '3312214032'
  }
]

const cardList = {
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

function App() {
  return (
    <>
      <Navbar tabs={tabs} current='Home' />

      <Banner {...bannerContent} />

      <div className='container-fluid w-90 text-center my-10p'>
        <h3 className='fs-1 f-title text-primary mb-5p'>Nuestra misión</h3>
        <p className='fs-3 text-dark'>Nuestra misión es satisfacer las necesidades tecnológicas de nuestros clientes en los sectores industrial, manufactura y diseño, ofreciendo soluciones personalizadas apoyadas en tecnología de punta y un equipo con amplia experiencia. Nos especializamos en consultoría, capacitación y desarrollo de proyectos para impulsar la competitividad y la excelencia operacional.</p>
      </div>
      <ToogleSection title='Servicios' elements={services} />
      <Clients />
      <ToggleList { ...cardList } />
      <MainFooter tabs={tabs} contact={contact} />
    </>
  )
}

export default App
