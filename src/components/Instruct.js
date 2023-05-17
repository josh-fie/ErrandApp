import classes from './Legend.module.css';

function Instruct(props) {
    return (
        <div className={classes.instruct}>
            <p>Click on the map to add an errand at that location. Then provide an errand name and supplementary notes</p>
        </div>
    )
}

export default Instruct;