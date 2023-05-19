import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import addIcon from '../assets/add-button.png';
import homeIcon from '../assets/home.png';
import statsIcon from '../assets/bar-chart.png';
import settingIcon from '../assets/cogwheel.png';

function MainNavigation(props) {
    return (
        <nav className={classes.nav}>
            <ul className={!props.lightMode ? classes.navbarDark : classes.navbarLight}>
                <li>
                    <Link to={'/add_errand'}><img src={addIcon} /></Link>
                </li>
                <li>
                    <Link to={'/'}><img src={homeIcon}/></Link>
                </li>
                <li>
                    <Link to={'/stats'}><img src={statsIcon}/></Link>
                </li>
                <li>
                    <Link to={'/settings'}><img src={settingIcon}/></Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation;