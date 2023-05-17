import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return <>
        <main className={classes.main}>
        {props.children}
        </main>
        <MainNavigation />
    </>
}

export default Layout;