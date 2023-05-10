import { useRef } from 'react';
import classes from './NewErrandForm.module.css'


function NewErrandForm(props) {
    const formSubmitHandler = function(e) {
        e.preventDefault()
        console.log('information submitted');
    };

    return (
    <form className={classes.formContainer} onSubmit={formSubmitHandler}>
        <label htmlFor="errand_name">New Errand</label>
        <input type="text" id="errand_name" placeholder="Errand Name" maxLength='6' required/>
        <textarea id="notes" rows='3' required/>
        <button type='submit'>Add New Errand</button>
    </form>
    )
}

export default NewErrandForm;