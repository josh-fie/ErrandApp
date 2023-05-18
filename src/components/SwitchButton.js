import classes from './SwitchButton.module.css';
import onSwitch from '../assets/on-button.png'
import offSwitch from '../assets/off-button.png'

export function SwitchLightButton (props) {

    return (
        <div className={classes.switch}>
        <h3>{props.switchname}</h3>
        <img src={!props.lightMode ? offSwitch : onSwitch} alt={props.alt} onClick={props.setLightMode}></img>
        </div>
    )
}

export function SwitchTextButton (props) {

    return (
        <div className={classes.switch}>
        <h3>{props.switchname}</h3>
        <img src={!props.largeText ? offSwitch : onSwitch} alt={props.alt} onClick={props.setLargeText}></img>
        </div>
    )
}


// Attribution
{/* <a href="https://www.flaticon.com/free-icons/toggle" title="toggle icons">Toggle icons created by Plastic Donut - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/nintendo-switch" title="nintendo switch icons">Nintendo switch icons created by Plastic Donut - Flaticon</a> */}