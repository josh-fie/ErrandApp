import Card from "../ui/Card"
import classes from './StatsCards.module.css';

function StatsCard (props) {
    return (
        <div className={!props.lightMode ? classes.card : classes.cardLight}>
            <h3>{props.title}</h3>
            <span>{props.number}</span>
        </div>
    )
}

export default StatsCard;