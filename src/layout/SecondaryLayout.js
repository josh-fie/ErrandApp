// import classes from './Layout.module.css';
import SecondaryNavigation from "./SecondaryNavigation";

function SecondaryLayout(props) {
    return <div>
        <SecondaryNavigation />
        <main>
        {props.children}
        </main>
    </div>
}

export default SecondaryLayout;