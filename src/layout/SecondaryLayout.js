// import classes from './Layout.module.css';
import SecondaryNavigation from "./SecondaryNavigation";
import { Outlet } from "react-router-dom";

function SecondaryLayout(props) {
    return <>
        <SecondaryNavigation />
        {/* <main>
        {props.children}
        </main> */}
        <Outlet />
    </>
}

export default SecondaryLayout;