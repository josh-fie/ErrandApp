import classes from './SwitchButton.module.css';

function SwitchButton (props) {
    return (
        <div className={classes.switch}>
        <img src={props.src} alt={props.alt}></img>
        <span>{props.switchname}</span>
        </div>
    )
}

export default SwitchButton;