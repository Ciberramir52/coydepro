function Tabs({ title, current }) {
    const isActive = title === current
    return (
        <li className='nav-item'>
            <a className={`nav-link text-primary fs-3 f-title ${ isActive ? 'active' : '' }`} aria-current='page' href='#'>{title}</a>
        </li>
    );
}

export default Tabs;