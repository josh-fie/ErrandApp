import {useContext} from 'react';
import ErrandList from '../components/ErrandList';
import CompletedContext from '../contexts/completed-context';



function CompletedPage(props) {
    const completedContext = useContext(CompletedContext);

    let content;

    if(completedContext.totalCompleted === 0) {
        content = <p>You've no errands completed yet.</p>
    } else {
        content = <ErrandList errands={completedContext.completed} />
    }

  return (
  <section>
    <h1>Completed</h1>
    {content}
  </section> )
}

export default CompletedPage;