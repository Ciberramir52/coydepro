import ClientCard from './ClientCard';
import electronicsImage from '/src/assets/images/Electronics.png';
import constructionImage from '/src/assets/images/Construction.png';
import automotrizImage from '/src/assets/images/Automotriz.png';
import foodImage from '/src/assets/images/Food.png';
import farmaceuticImage from '/src/assets/images/Farmaceutic.png';

function Clients() {
    return (
        <div className='my-10p w-65 mx-auto min-width-400'>
            <div className='container-fluid text-center'>
                <h3 className='fs-1 f-title text-primary mb-5p'>Nuestros clientes</h3>
                <div className='container-fluid text-center mt-10p'>
                    <div className='row gx-5 gy-5 align-items-stretch'>
                        <ClientCard img={electronicsImage} col='8' title='Electrónica' />
                        <ClientCard img={constructionImage} col='4' title='Construcción' />
                        <div className={`col-12 col-lg-4 d-flex flex-column justify-content-center`}>
                            <div className='row gy-5 align-items-start'>
                                <ClientCard img={automotrizImage} col='12' title='Automotriz' />
                                <ClientCard img={foodImage} col='12' title='Alimentación' />
                            </div>
                        </div>
                        <ClientCard img={farmaceuticImage} col='8' title='Farmacéutica' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;