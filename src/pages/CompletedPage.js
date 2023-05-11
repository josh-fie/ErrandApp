import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import ErrandList from '../components/ErrandList';



function CompletedPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedErrands, setLoadedErrands] = useState(props.state);

  return (
  <section>
    {/* <ErrandList errands={loadedErrands} /> */}
    <h1>Completed</h1>
  </section> )
}

export default CompletedPage;