import { useContext} from 'react';
import StatsCard from '../components/StatsCard';
import PrioritiesContext from '../contexts/priority-context';
import CompletedContext from '../contexts/completed-context';
import Header from '../components/Header';

function StatisticsPage(props) {
    const prioritiesContext = useContext(PrioritiesContext);
    const completedContext = useContext(CompletedContext);


    if(props.state) return (
        <div className='statsPage'>
        <StatsCard title='Current Errands' number={props.state.length} lightMode={props.lightMode}/>
        <StatsCard title='Priority Errands' number={prioritiesContext.priorities.length} lightMode={props.lightMode}/>
        <StatsCard title='Completed Errands' number={completedContext.completed.length} lightMode={props.lightMode}/>
        </div>
    )
    if(!props.state) return (
    <>
        <Header title="Statistics"/>
        <p style={
            {width: "95%",
            margin: "0 auto"}
        }>You've no stats to show</p>
    </>
    )
};

export default StatisticsPage;