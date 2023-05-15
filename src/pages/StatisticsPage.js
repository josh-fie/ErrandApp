import { useContext} from 'react';
import StatsCard from '../components/StatsCard';
import PrioritiesContext from '../contexts/priority-context';
import CompletedContext from '../contexts/completed-context';

function StatisticsPage(props) {
    const prioritiesContext = useContext(PrioritiesContext);
    const completedContext = useContext(CompletedContext);


    if(props.state) return (
        <div className='statsPage'>
        <StatsCard title='Current Errands' number={props.state.length}/>
        <StatsCard title='Priority Errands' number={prioritiesContext.priorities.length}/>
        <StatsCard title='Completed Errands' number={completedContext.completed.length}/>
        </div>
    )
    if(!props.state) return <h5>No stats to show</h5>;
};

export default StatisticsPage;