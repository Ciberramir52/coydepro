import { Link } from "react-router-dom";

function NavTabs({ title, current, to }) {
    const isActive = title.toLowerCase() === current.toLowerCase()
    return (
        <li className='nav-item'>
            <Link to={to} className={`nav-link text-primary fs-3 f-title ${ isActive ? 'active' : '' }`} aria-current='page'>{title}</Link>
        </li>
    );
}

export default NavTabs;