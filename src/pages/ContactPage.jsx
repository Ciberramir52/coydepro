import { useState } from "react";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "1",
        message: ""
    });
    const onInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            service: "1",
            message: ""
        })
    }
    return (
        <>
            <div className="container my-5p">
                <div className="row justify-content-between gy-5">
                    <form onSubmit={onSubmit} className="col-12 col-md-5">
                        <h3 className="f-title text-dark fs-3">Contactanos</h3>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="fs-4 text-dark form-label">Nombre</label>
                            <input minLength={4} required onChange={onInputChange} value={formData.name} style={{ background: "#fff" }} type="text" className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="inputName" name="name" aria-describedby="nameHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="fs-4 text-dark form-label">Email address</label>
                            <input required onChange={onInputChange} value={formData.email} style={{ background: "#fff" }} type="email" className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="inputEmail" name="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="selectService" className="fs-4 text-dark form-label">Servicio</label>
                            <select onChange={onInputChange} value={formData.service} style={{ background: "#fff" }} className="py-2 px-3 w-80 text-dark fs-4 form-select border-dark" id="selectService" name="service">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textAreaMessage" className="form-label fs-4 text-dark">Mensaje</label>
                            <textarea minLength={8} required onChange={onInputChange} value={formData.message} style={{ background: "#fff" }} className="py-2 px-3 w-80 text-dark fs-4 form-control border-dark" id="textAreaMessage" name="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary f-title fs-4 py-2 px-5">Enviar</button>
                    </form>
                    <div className="col-12 col-md-5">
                        <h3 className="f-title text-dark fs-3 mb-5">Informacion de contacto</h3>
                        <p className="fs-3 mb-5"><i className="col-12 col-md-6 bi bi-telephone-fill"/> +52 331 221 40320</p>
                        <p className="fs-4"><i className="col-12 col-md-6 bi bi-envelope"/> ramiro.ruiz@coydepro.com.mx</p>
                    </div>
                </div>
            </div>
            <div className="container my-5p d-flex flex-column gap-5 align-items-center justify-content-center text-dark text-center">
                <i class="bi bi-calendar3-week-fill display-1" />
                <div className="f-title fs-2">Horario de atencion</div>
                <div className="fs-4">
                    <p>Lunes a Viernes:</p>
                    <p>9:00 am - 6:00 pm</p>
                </div>
                <div className="fs-4">
                    <p>Sabados:</p>
                    <p>9:00 am - 1:00 pm</p>
                </div>
            </div>
        </>
    );
}

export default ContactPage;