import {useState, useEffect} from 'react';
import Card from '../ui/Card';

import ErrandList from '../components/ErrandList';



function AllErrandsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedErrands, setLoadedErrands] = useState(props.state);

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
    <ErrandList errands={loadedErrands} />
      
      {/* <MeetupList meetups={loadedMeetups} /> */}
  </section> )
}

export default AllErrandsPage;