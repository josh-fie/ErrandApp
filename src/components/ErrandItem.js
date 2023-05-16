import Card from '../ui/Card';
import PrioritiesContext from '../contexts/priority-context';
import CompletedContext from '../contexts/completed-context';
import { useContext, useState } from 'react';

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
                notes: props.notes,
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
                notes: props.notes,
                // isPriority: true,
                // isCompleted: false,
                id: props.id,
            })
            // setIsDisabled(true);
            isDisabled = true;
        }
    }

    return (
    <Card>
        <h1>{props.name}</h1>
        <p>{props.notes}</p>
        <button type='button' disabled={isDisabled} onClick={togglePriorityStatusHandler}>
        {itemIsPriority ? 'De-prioritise' : 'Prioritise'}</button>
        <button type='button' onClick={toggleCompletedStatusHandler} >{itemIsCompleted ? 'Incomplete' : 'Complete'}</button>
    </Card>
    )
}

export default ErrandItem;