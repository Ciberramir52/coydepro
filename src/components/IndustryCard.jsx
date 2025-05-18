function IndustryCard({ icon, title, description }) {
    return ( 
        <div className="col-12 col-xl-3 col-md-4 col-sm-6">
            <div style={{ background: "#fff" }} className="container px-5 py-5 d-flex flex-column justify-content-center align-items-center gap-3 border border-dark">
                <i className={`bi ${icon} display-1 text-dark`} />
                <h2 className="f-title fs-3">{title}</h2>
                <p className="text-center fs-4">{description}</p>
                <a href='#start-analysis' className='btn btn-primary btn-lg w-auto px-4 py-2 px-md-2 px-lg-4 text-light fs-4 fw-bold f-title'>Contactanos</a>
            </div>
        </div>
     );
}

export default IndustryCard;