import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ToggleList from '../components/ToggleList';
import MainFooter from '../components/MainFooter';
import ToogleSection from '../components/ToggleSection';
import Clients from '../components/Clients';
import { services, bannerContent, cardList } from '../helpers/mainInformation'

function HomePage() {
    return (
        <>
            <Banner {...bannerContent} />

            <div className='container-fluid w-90 text-center my-10p'>
                <h3 className='fs-1 f-title text-primary mb-5p'>Nuestra misión</h3>
                <p className='fs-3 text-dark'>Nuestra misión es satisfacer las necesidades tecnológicas de nuestros clientes en los sectores industrial, manufactura y diseño, ofreciendo soluciones personalizadas apoyadas en tecnología de punta y un equipo con amplia experiencia. Nos especializamos en consultoría, capacitación y desarrollo de proyectos para impulsar la competitividad y la excelencia operacional.</p>
            </div>
            <ToogleSection title='Servicios' elements={services} />
            <Clients />
            <ToggleList {...cardList} />
        </>
    );
}

export default HomePage;