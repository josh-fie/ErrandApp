import {useContext} from 'react';
import ErrandList from '../components/ErrandList';
import PrioritiesContext from '../contexts/priority-context';



function PrioritiesPage(props) {
    const prioritiesContext = useContext(PrioritiesContext);

    let content;

    if(prioritiesContext.totalPriorities === 0) {
        content = <p>You've no priorities yet.</p>
    } else {
        content = <ErrandList errands={prioritiesContext.priorities} />
    }

  return (
  <section>
    <h1>Priorities</h1>
    {content}
  </section> )
}

export default PrioritiesPage;