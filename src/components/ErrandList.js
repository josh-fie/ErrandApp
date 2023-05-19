import ErrandItem from './ErrandItem';

function ErrandList(props) {
    return (
    <>
        {props.errands.map((obj) => {
            console.log(props, obj);
            return <ErrandItem key={obj.id} id={obj.id} name={obj.name} note={obj.notes} setState={props.setState} lightMode={props.lightMode}/>
        })}
    </>
    )
}

export default ErrandList;

/* //Map over errands received through AllErrandsPage props for the List and generate an errand item for each, passing in deconstructed properties from prop object.*/