import classes from './Legend.module.css';
import { useRef } from 'react';
import close from '../assets/close.png'

function Instruct(props) {

    const checkbox = useRef();

    function handleInstructions() {
        props.setInstructions(false);
    }

    return (
        <div className={classes.instruct}>
            <div className={classes.formTitleClose}>
                <span>How To</span>
                <button type='button' onClick={handleInstructions}><img src={close} alt='Close' /></button>
            </div>
            <p>Click on the map to add an errand at that location. Then provide an errand name and supplementary notes</p>
        </div>
    )
}

export default Instruct;