import { Link } from "react-router-dom";

function AccordionItem({ icon, title, description, benefits, explanation, to }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button bg-primary fs-2 d-flex gap-4 f-title text-light" type="button" data-bs-toggle="collapse" data-bs-target={`#${icon}`} aria-expanded="false" aria-controls={icon}>
                    <i className={`bi ${icon} text-secondary fs-1`} />
                    {title}
                </button>
            </h2>
            <div id={icon} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={{ background: "#fff" }} className="accordion-body border border-dark">
                    <p className="fs-4">{description}</p>
                    <h3 className="f-title fs-3">Beneficios</h3>
                    <ul>
                        {
                            benefits.map(benefit => <li key={benefit} className="fs-4">{benefit}</li>)
                        }
                    </ul>
                    <h3 className="f-title fs-3">¿Cómo funciona?</h3>
                    <ol>
                        {
                            explanation.map(step => <li key={step} className="fs-4">{step}</li>)
                        }
                    </ol>
                    <Link to={to} className='btn btn-secondary btn-lg w-auto px-4 py-3 text-light fs-3 fw-bold f-title'>Contactanos</Link>
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;