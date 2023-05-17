import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import SecondaryLayout from '../layout/SecondaryLayout';
import ErrandList from '../components/ErrandList';



function AllErrandsPage(props) {
  // const [isLoading, setIsLoading] = useState(true);

  return (
  <section>
    {props.state && props.state.length > 0 ? <ErrandList errands={props.state} setState={props.setState}/> : <h6>No errands to show</h6>}
  </section> )
}

export default AllErrandsPage;