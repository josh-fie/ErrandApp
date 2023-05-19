import classes from './Header.module.css';

function Header(props) {
    return (
        <>
        <div className={classes.headerDiv}><h4>{props.title}</h4></div>
        </>
    )
}

export default Header;