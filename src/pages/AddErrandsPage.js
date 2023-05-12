import {useState, useEffect} from 'react';
import NewErrandForm from '../components/NewErrandForm';
import MapComp from '../components/MapComp';


function AddErrandsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  

  // Generate Markers on the Map with existing props.state that aren't completed.

  return (
    <div>
        <MapComp state={props.state}/>
        {/* <NewErrandForm /> */}
    </div>
  )};

export default AddErrandsPage;