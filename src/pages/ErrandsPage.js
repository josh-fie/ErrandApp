import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import { Routes, Route } from 'react-router-dom';
import SecondaryLayout from '../layout/SecondaryLayout';
import AllErrandsPage from './AllErrandsPage';
import PrioritiesPage from './PrioritiesPage';
import CompletedPage from './CompletedPage';



function ErrandsPage(props) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedErrands, setLoadedErrands] = useState(props.state);

// Geolocation API requesting location for map. This will ask for access to location on devices as app loads

// Retrieve localStorage

//   useEffect(() => {
//     setIsLoading(true);
//     fetch('https://josh-fie-react-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
//     .then(response => {
//       return response.json();
//     }).then(data => {
//       const meetups = [];

//       for (const key in data) {
//         const meetup = {
//           id: key,
//           ...data[key]
//         }

//         meetups.push(meetup);
//       }
//       setIsLoading(false);
//       setLoadedMeetups(meetups);
//     });
//   }, []); //empty dependency array to only run once.

//   if (isLoading) {
//     return (
//       <section>
//         <p>Loading...</p>
//       </section>
//     )
//   }

  return (
  <section>
    {/* <ErrandList errands={loadedErrands} /> */}
    <SecondaryLayout>
      <Routes>
        <Route path='/allerrands' element={<AllErrandsPage state={props.state}/>}>
                </Route>
        <Route path='/priorities' element={<PrioritiesPage state={props.state}/>}>
                </Route>
        <Route path='/completed' element={<CompletedPage state={props.state}/>}>
                </Route>
      </Routes>
    </SecondaryLayout>
    
  </section> )
}

export default ErrandsPage;