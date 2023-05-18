import classes from './Legend.module.css';
import { useRef } from 'react';

function Instruct(props) {

    const checkbox = useRef();

    function handleInstructions() {
        props.setInstructions(false);
    }

    return (
        <div className={classes.instruct}>
            <button type='button' onClick={handleInstructions}>X</button>
            <p>Click on the map to add an errand at that location. Then provide an errand name and supplementary notes</p>
        </div>
    )
}

export default Instruct;