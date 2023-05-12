import { Link, NavLink } from 'react-router-dom';
import classes from './SecondaryNavigation.module.css';

function SecondaryNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navbar}>
                <li>
                    <NavLink to={'/'}>All Errands</NavLink>
                </li>
                <li>
                    <NavLink to={'/priorities'}>Priorities</NavLink>
                </li>
                <li>
                    <NavLink to={'/completed'}>Completed</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SecondaryNavigation;