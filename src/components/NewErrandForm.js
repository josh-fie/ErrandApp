import { useRef } from 'react';
import classes from './NewErrandForm.module.css'


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
            <button type='button' onClick={onClickHandler}>X</button>
            <label htmlFor="errand_name">New Errand</label>
            <input type="text" id="errand_name" placeholder="Errand Name" maxLength='12' ref={errandName} required/>
            <textarea id="notes" rows='3' ref={errandDescription} required/>
            <button type='submit'>Add New Errand</button>
        </form>
    </>
    )
}

export default NewErrandForm;