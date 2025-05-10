import { useState } from "react";

function ClientCard({ title, img, col }) {
    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <div className={`col-12 col-lg-${col} d-flex justify-content-center`}>
            <div className="card text-bg-dark position-relative h-100 cursor-pointer">
                <img
                    src={img}
                    className="card-img h-100"
                    alt='Alt text'
                    onClick={() => setShowOverlay(true)}
                    style={{objectFit: 'cover'}}
                />
                <div
                    className={`card-img-overlay text-bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade${showOverlay ? " show" : ""}`}
                    style={{ pointerEvents: showOverlay ? "auto" : "none" }}
                    onClick={() => setShowOverlay(false)}
                >
                    <h5 className="card-title fs-2 text-light">{title}</h5>
                </div>
            </div>
        </div>
    );
}

export default ClientCard;