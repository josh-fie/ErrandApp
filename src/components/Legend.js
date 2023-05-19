import classes from './Legend.module.css';

function Legend(props) {
    return (
        <div className={classes.legend}>
            <div>
                <div className={classes.standardColour}></div><span>Standard</span>
            </div>
            <div>
                <div className={classes.priorityColour}></div><span>Priority</span>
            </div>
            <div>
                <div className={classes.completedColour}></div><span>Completed</span>
            </div>
        </div>
    )
}

export default Legend;