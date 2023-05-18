// import classes from './Layout.module.css';
import SecondaryNavigation from "./SecondaryNavigation";
import { Outlet } from "react-router-dom";
import classes from './SecondaryLayout.module.css';

function SecondaryLayout(props) {
    return <>
        <SecondaryNavigation />
        {/* <main>
        {props.children}
        </main> */}
        <div className={classes.errandsContainer}>
            <Outlet/>
        </div>
    </>
}

export default SecondaryLayout;