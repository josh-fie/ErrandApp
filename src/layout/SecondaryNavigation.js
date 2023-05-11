import { Link } from 'react-router-dom';
import classes from './SecondaryNavigation.module.css';

function SecondaryNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navbar}>
                <li>
                    <Link to={'/allerrands'}>All Errands</Link>
                </li>
                <li>
                    <Link to={'/priorities'}>Priorities</Link>
                </li>
                <li>
                    <Link to={'/completed'}>Completed</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SecondaryNavigation;