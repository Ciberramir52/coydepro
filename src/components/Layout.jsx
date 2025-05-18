import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MainFooter from "./MainFooter";
import { contact, tabs } from "../helpers/information";

function Layout() {
    const location = useLocation().pathname.slice(1)
    const current = location === '' ? 'Home' : location
    return (
        <>
            <Navbar tabs={tabs} current={current} />
            <Outlet />
            <MainFooter contact={contact} tabs={tabs} />
        </>
    );
}

export default Layout;