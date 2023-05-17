import classes from './Legend.module.css';

function Legend(props) {
    return (
        <div className={classes.legend}>
            <div className={classes.standardColour}></div><span>Standard</span>
            <div className={classes.priorityColour}></div><span>Priority</span>
            <div className={classes.completedColour}></div><span>Completed</span>
        </div>
    )
}

export default Legend;