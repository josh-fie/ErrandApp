import classes from '../ui/Card.module.css';

function Card(props) {
    return <div className={!props.lightMode ? classes.card : classes.cardLight}>{props.children}</div>
}

export default Card;