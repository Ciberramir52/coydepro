import { services } from "../helpers/services";

function ContactForm({ onSubmit, onChange, data }) {
    
    return (
        <form onSubmit={onSubmit} className="col-12 col-md-5">
            <h3 className="f-title text-dark fs-3">Contactanos</h3>
            <div className="mb-3">
                <label htmlFor="inputName" className="fs-4 text-dark form-label">Nombre</label>
                <input minLength={4} required onChange={onChange} value={data.name} style={{ background: "#fff" }} type="text" className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="inputName" name="name" aria-describedby="nameHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="fs-4 text-dark form-label">Email address</label>
                <input required onChange={onChange} value={data.email} style={{ background: "#fff" }} type="email" className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="inputEmail" name="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="selectService" className="fs-4 text-dark form-label">Servicio</label>
                <select onChange={onChange} value={data.service} style={{ background: "#fff" }} className="py-2 px-3 w-80 text-dark fs-4 form-select border-dark" id="selectService" name="service">
                    {
                        services.map(service => (<option value={service.title} key={service.icon}>{service.title}</option>))
                    }
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="textAreaMessage" className="form-label fs-4 text-dark">Mensaje</label>
                <textarea minLength={8} required onChange={onChange} value={data.message} style={{ background: "#fff" }} className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="textAreaMessage" name="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary f-title fs-4 py-2 px-5">Enviar</button>
        </form>
    );
}

export default ContactForm;