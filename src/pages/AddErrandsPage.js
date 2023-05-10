import {useState, useEffect} from 'react';
import NewErrandForm from '../components/NewErrandForm';


function AddErrandsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedErrands, setLoadedErrands] = useState([]);

  // Generate Markers on the Map with existing props.state that aren't completed.

  return (
    <div>
        <iframe width="100%" height="100%">Map location</iframe>
        <NewErrandForm />
    </div>
  )};

export default AddErrandsPage;