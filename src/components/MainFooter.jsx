import footerLogo from '/src/assets/images/FooterLogo.png';

function MainFooter({ tabs, contact }) {
    return (
        <footer className="bg-secondary text-dark pt-4 pb-2 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <a className='navbar-brand d-flex align-items-center' href='#'>
                            <img src={footerLogo} alt='Coydepro Logo' width='50%' height='50%' className='img-fluid footer-navbar' />
                        </a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className='fs-4 f-title text-primary'>Enlaces</h5>
                        <ul className="list-unstyled">
                            {
                                tabs.map(tab => (
                                    <li key={tab.title}><a href="#" className="text-light text-decoration-none fs-5 f-title">{tab.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className='f-title text-primary fs-4'>Contacto</h5>
                        <ul className="list-unstyled">
                            {
                                contact.map(info => (
                                    <li key={info.subject} className='fs-5 f-title text-light'>{info.subject}: {info.content}</li>
                                ))
                            }
                            <li>
                                <a href="#" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-light me-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="border-light border-2" />
                <div className="text-center small">
                    © 2025 COYDEPRO. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;