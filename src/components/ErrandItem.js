import Card from '../ui/Card';

//import styling? or just have in app.css styling?

function ErrandItem(props) {
    return (
    <Card>
        <h1>{props.name}</h1>
        <p>{props.notes}
        </p>
        <button type='button' value='Priority'>
        {props.isPriority ? 'De-prioritise' : 'Prioritise'}</button>
        <button type='button' value='Complete'>{props.isCompleted ? 'Incomplete' : 'Complete'}
        </button>
    </Card>
    )
}

export default ErrandItem;