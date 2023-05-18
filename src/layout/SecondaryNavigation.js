import { Link, NavLink } from 'react-router-dom';
import classes from './SecondaryNavigation.module.css';

function SecondaryNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navbar}>
                <li>
                    <NavLink to={'/'} className={nav => (nav.isActive ? classes.linkActive : '')}><span>All Errands</span></NavLink>
                </li>
                <li>
                    <NavLink to={'/priorities'} className={nav => (nav.isActive ? classes.linkActive : '')}><span>Priorities</span></NavLink>
                </li>
                <li>
                    <NavLink to={'/completed'} className={nav => (nav.isActive ? classes.linkActive : '')}><span>Completed</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SecondaryNavigation;