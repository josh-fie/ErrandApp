import Card from '../ui/Card';
import PrioritiesContext from '../contexts/priority-context';
import CompletedContext from '../contexts/completed-context';
import { useContext, useState } from 'react';
import flag from '../assets/flag.png';
import check from '../assets/check.png';
import close from '../assets/close.png';

import classes from './ErrandItem.module.css'


//import styling? or just have in app.css styling?

function ErrandItem(props) {
    const priorityContext = useContext(PrioritiesContext);
    const completedContext = useContext(CompletedContext);

    const itemIsPriority = priorityContext.itemIsPriority(props.id);
    const itemIsCompleted = completedContext.itemIsCompleted(props.id);

    // Disable Priority button if Completed State
    // const [isDisabled, setIsDisabled] = useState(false);

    let isDisabled;
    if(itemIsCompleted) {
        isDisabled = true;
    } else isDisabled = false;

    function togglePriorityStatusHandler () {
        if(itemIsPriority) {
            priorityContext.removePriority(props.id);
        } else {
            priorityContext.addPriority({
                name: props.name,
                notes: props.note,
                // isPriority: true,
                // isCompleted: false,
                id: props.id,
            })
        }
    }

    function toggleCompletedStatusHandler () {
        if(itemIsCompleted) {
            completedContext.removeCompleted(props.id);
            // setIsDisabled(false);
            isDisabled = false;
        } else {
            completedContext.addCompleted({
                name: props.name,
                notes: props.note,
                // isPriority: true,
                // isCompleted: false,
                id: props.id,
            })
            // setIsDisabled(true);
            isDisabled = true;
        }
    }

    function handleDeleteErrand () {
        console.log(props);
        props.setState(props.id, false);

        // Remove from priorities
        priorityContext.removePriority(props.id);
        // Remove from completed
        completedContext.removeCompleted(props.id);
    }

    return (
    <Card lightMode={props.lightMode}>
        <h3>{props.name}</h3>
        <div className={classes.cardButtons}>
            <button className={classes.button} type='button' disabled={isDisabled} onClick={togglePriorityStatusHandler}>
            {itemIsPriority ? <img src={flag} style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(1185%) hue-rotate(91deg) brightness(98%) contrast(106%)'}}/> : <img src={flag} style={{filter: 'invert()', opacity: '0.5'}}/>}</button>
            <button className={classes.button} type='button' onClick={toggleCompletedStatusHandler} >{itemIsCompleted ? <img src={check} style={{filter: 'brightness(0) saturate(100%) invert(16%) sepia(36%) saturate(5305%) hue-rotate(228deg) brightness(83%) contrast(132%)'}}/> : <img src={check} style={{filter: 'invert()', opacity: '0.5'}}/>}</button>
            <button className={classes.button} type='button' onClick={handleDeleteErrand} ><img src={close}/></button>
        </div>
        <div className={classes.cardParagraph}>
            <p>{props.note}</p>
        </div>
    </Card>
    )

    // Attribution

    // <a href="https://www.flaticon.com/free-icons/pennant" title="pennant icons">Pennant icons created by Royyan Wijaya - Flaticon</a>

    // flag attribution

    // <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Maxim Basinski Premium - Flaticon</a>

    // tick attribution

    // <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>

    // cross/close attribution

    // <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
}

export default ErrandItem;