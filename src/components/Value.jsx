function Value({ icon, title, description }) {
    return (
        <div className="col-12 col-lg-3 py-5 d-flex flex-column gap-4">
            <h2 className="fs-3 f-title text-dark">{title}</h2>
            <i className={`bi ${icon} text-secondary display-1`} />
            <p className="fs-4">{description}</p>
        </div>
    );
}

export default Value;