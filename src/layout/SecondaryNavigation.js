import { Link, NavLink } from 'react-router-dom';
import classes from './SecondaryNavigation.module.css';

function SecondaryNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navbar}>
                <li>
                    <NavLink to={'/'} className={nav => (nav.isActive ? classes.linkActive : '')}><h4>All</h4></NavLink>
                </li>
                <li>
                    <NavLink to={'/priorities'} className={nav => (nav.isActive ? classes.linkActive : '')}><h4>Priority</h4></NavLink>
                </li>
                <li>
                    <NavLink to={'/completed'} className={nav => (nav.isActive ? classes.linkActive : '')}><h4>Complete</h4></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SecondaryNavigation;