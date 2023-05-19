import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import SecondaryLayout from '../layout/SecondaryLayout';
import ErrandList from '../components/ErrandList';



function AllErrandsPage(props) {
  // const [isLoading, setIsLoading] = useState(true);

  return (
  <div>
    {props.state && props.state.length > 0 ? <ErrandList errands={props.state} setState={props.setState} lightMode={props.lightMode}/> : <p>You've no errands added yet.</p>}
  </div> )
}

export default AllErrandsPage;