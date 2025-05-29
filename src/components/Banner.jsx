import { Link } from "react-router-dom";

function Banner({ title, description, cto, img }) {
    const bannerStyle = {
        backgroundImage: `url(${img})`,
    }
    return (
        <div style={bannerStyle} className='hero-banner mt-5p w-90 mx-auto min-width-400'>
            <div className='container hero-content d-flex flex-column gap-lg-5 justify-content-center align-items-center'>
                <h1 className='display-4 fw-bold text-light f-title'>{title}</h1>
                <p className='lead text-light fs-3 mt-lg-5 mb-lg-5'>
                    {description}
                </p>
                <Link to="/contacto" className='btn btn-secondary btn-lg w-auto px-5 py-3 text-primary fs-3 fw-bold f-title'>{cto}</Link>
            </div>
        </div>
    );
}

export default Banner;