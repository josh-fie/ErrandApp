import {useState, useEffect} from 'react';
import NewErrandForm from '../components/NewErrandForm';
import MapComp from '../components/MapComp';


function AddErrandsPage(props) {
  // const [isLoading, setIsLoading] = useState(true);
  const [formActive, setFormActive] = useState(false);
  const [clickPos, setClickPosition] = useState(null);

  const handleClickPositionChange = (position) => {
    setClickPosition(position);
  }
  
  useEffect(() => {
    console.log(clickPos);
  }, [clickPos]);

  // Generate Markers on the Map with existing props.state that aren't completed.

  return (
    <>
        <MapComp setClickPosition={handleClickPositionChange} state={props.state} location={props.location} formActivate={() => setFormActive(true)} />
        {formActive ? <NewErrandForm clickPos={clickPos} setState={props.setState} state={props.state} onCloseSubmit={() => setFormActive(false)} /> : console.log("Form Inactive")}
    </>
  )};

export default AddErrandsPage;