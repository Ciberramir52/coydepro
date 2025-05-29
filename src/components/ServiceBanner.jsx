import { Link } from "react-router-dom";

function ServiceBanner({ img, description, cta, to }) {
    return (
        <div style={{ background: "#fff" }} className="row">
            <img style={{ objectFit: "cover" }} src={img} alt="" className="col-12 col-lg-8" />
            <div className="col-12 col-lg-4 p-4 d-flex flex-column justify-content-center align-items-start gap-5">
                <p className="fs-4 col-12">{description}</p>
                <Link to={to} className='btn btn-primary btn-lg w-auto px-4 py-3 text-light fs-3 fw-bold f-title'>{cta}</Link>
            </div>
        </div>
    );
}

export default ServiceBanner;