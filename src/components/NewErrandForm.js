import { useRef } from 'react';
import classes from './NewErrandForm.module.css'
import close from '../assets/close.png';


function NewErrandForm(props) {
    const errandName = useRef();
    const errandDescription = useRef();

    const formSubmitHandler = function(e) {
        e.preventDefault()

        //Text Field inputs
        const inputName = errandName.current.value;
        const inputDesc = errandDescription.current.value;

        const newErrand = {
            name: inputName,
            notes: inputDesc,
            id: /*props.state ? (props.state).length + 1 : */(Math.random() * 534), //id need to be generated based on previous state. Either random numbers or work out way of changing all id;s in state when one is removed or added.
            lat: props.clickPos.lat,
            lng: props.clickPos.lng,
        };

        // Render Marker

        // Change State on App by adding new inputs into an object with lat, lng.
        // may need handler function on app to handle setState changes.
        props.setState(newErrand);

        // Close Form Component
        props.onCloseSubmit();
        console.log('information submitted', newErrand);
    };

    const onClickHandler = function(e) {
        props.onCloseSubmit();
        console.log('close button clicked');
        
    }

    return (
    <>
        <form className={classes.formContainer} onSubmit={formSubmitHandler}>
            <div className={classes.formTitleClose}>
                <label htmlFor="errand_name">New Errand</label>
                <button type='button' onClick={onClickHandler}><img src={close} alt='Close' /></button>
            </div>
            <input type="text" id="errand_name" placeholder="Name..." maxLength='30' ref={errandName} required autoFocus/>
            <textarea id="notes" rows='4' ref={errandDescription} placeholder="Notes..." required/>
            <button type='submit' className={classes.submitButton}>+</button>
        </form>
    </>
    )
}

export default NewErrandForm;