import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import ErrandList from '../components/ErrandList';



function PrioritiesPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedErrands, setLoadedErrands] = useState(props.state);

  return (
  <section>
    {/* <ErrandList errands={loadedErrands} /> */}
    <h1>Priorities</h1>
  </section> )
}

export default PrioritiesPage;