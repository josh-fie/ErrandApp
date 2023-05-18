import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={!props.lightMode ? classes.navbarDark : classes.navbarLight}>
                <li>
                    <Link to={'/add_errand'}>Add Errand</Link>
                </li>
                <li>
                    <Link to={'/'}>All Errands</Link>
                </li>
                <li>
                    <Link to={'/stats'}>Stats</Link>
                </li>
                <li>
                    <Link to={'/settings'}>Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation;