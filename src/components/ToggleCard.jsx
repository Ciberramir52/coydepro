const imgStyle = {
    objectFit: 'cover',
    height: '400px',
    width: '100%'
}

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    pointerEvents: 'auto', // ensures overlay is clickable
}

const topCardStyle = {
    position: 'relative',
    width: '100%'
}

function ServiceCard({ img, title, description }) {
    return (
        <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="card w-100">
                <div
                    style={topCardStyle}
                    className="cursor-pointer"
                >
                    <img
                        src={img}
                        className="card-img card-img-top"
                        alt="Card image"
                        style={imgStyle}
                    />
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={overlayStyle}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${title}`}
                        aria-expanded="false"
                        aria-controls={`${title}`}
                    >
                        <h5 className="card-title fs-1 text-light">{title}</h5>
                    </div>
                </div>

                <div className="collapse" id={`${title}`}>
                    <div className="card-body bg-secondary px-5 py-5">
                        <p className="card-text fs-4">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;