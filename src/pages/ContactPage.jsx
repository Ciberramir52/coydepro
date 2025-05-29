import { useState } from "react";
import { sendEmail } from "../helpers/sendEmail";
import ContactForm from "../components/ContactForm";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Optimización de Procesos",
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
        sendEmail(e)
        setFormData({
            name: "",
            email: "",
            service: "Optimización de Procesos",
            message: ""
        })
    }

    return (
        <>
            <div className="container my-5p">
                <div className="row justify-content-between gy-5">
                    <ContactForm onSubmit={onSubmit} onChange={onInputChange} data={formData}/>
                    <div className="col-12 col-md-5">
                        <h3 className="f-title text-dark fs-3 mb-5">Informacion de contacto</h3>
                        <p className="fs-3 mb-5"><i className="col-12 col-md-6 bi bi-telephone-fill"/> +52 331 221 40320</p>
                        <p className="fs-4"><i className="col-12 col-md-6 bi bi-envelope"/> ramiro.ruiz@coydepro.com.mx</p>
                    </div>
                </div>
            </div>
            <div className="container my-5p d-flex flex-column gap-5 align-items-center justify-content-center text-dark text-center">
                <i className="bi bi-calendar3-week-fill display-1" />
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