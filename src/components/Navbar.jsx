import Tabs from "./Tabs";
import Logo from '/src/assets/images/Logo.png';

function Navbar({ tabs, current }) {
    return (
        <nav className='navbar bg-secondary navbar-expand-lg py-4 px-4'>
            <div className='container-fluid'>
                <a className='navbar-brand fs-1 fs-md-2 fs-lg-1 d-flex align-items-center gap-4 text-primary f-brand' href='#'>
                    <img src={Logo} alt='Coydepro Logo' width='10%' height='10%' className='d-inline-block align-text-middle img-fluid logo-navbar' />
                    COYDEPRO
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav ms-auto d-flex align-items-center gap-4'>
                        {
                            tabs.map(tab => (
                                <Tabs key={tab.title} { ...tab } current={current} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;