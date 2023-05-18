import classes from './Layout.module.css';
import mode from '../App.css'
import MainNavigation from './MainNavigation';

function Layout(props) {

    return (
    <>
        <main className={`${
            !props.lightMode ? classes.mainDarkMode : classes.mainLightMode}
            ${props.largeText ? classes.mainLargeText : ''}`}>
        {props.children}
        </main>
        <MainNavigation lightMode={props.lightMode}/>
    </> )
}

export default Layout;