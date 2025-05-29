import Value from "../components/Value";
import { reasons, values } from "../helpers/aboutInformation";
import aboutImage from "/src/assets/images/About.jpg"

function AboutPage() {
    const bannerStyle = {
        backgroundImage: `url(${aboutImage})`,
    }
    return (
        <>
            <div style={bannerStyle} className='about-banner'>
                <div className='container bg-light hero-content d-flex flex-column gap-lg-4 justify-content-center align-items-center rounded-5 py-5 px-4'>
                    <h1 className='display-4 fw-bold text-primary f-title'>Mision</h1>
                    <p className='text-dark fs-3 mt-lg-5 mb-lg-5'>
                        Satisfacer las necesidades tecnológicas de nuestros clientes en los sectores industrial, manufactura y diseño, ofreciendo soluciones personalizadas apoyadas en tecnología de punta y un equipo con amplia experiencia.
                    </p>
                    <h1 className='display-4 fw-bold text-primary f-title'>Vision</h1>
                    <p className='text-dark fs-3 mt-lg-5 mb-lg-5'>
                        Ser reconocidos por nuestros clientes como su mejor aliado estratégico para alcanzar sus objetivos.
                    </p>
                </div>
            </div>
            <div style={{ background: "#fff" }} className="container my-5p">
                <div className="row text-center text-dark px-4 gx-5">
                    {
                        values.map(value => (
                            <Value { ...value }/>
                        ))
                    }
                </div>
            </div>
            <div className="container my-5p text-dark d-flex flex-column align-items-center">
                <h2 className="f-title text-center mb-5">Porque coydepro?</h2>
                <div style={{ background: "#fff", maxWidth: "1000px" }} className="container py-3 px-4 rounded-4 border border-dark row justify-content-center">
                    <ul className="col-12 col-md-5 d-flex flex-column list-unstyled reasons-list">
                        {
                            reasons.map(reason => (<li key={reason} className="fs-4">{reason}</li>))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutPage;