import {useState, useEffect} from 'react';
import Card from '../ui/Card';
import SecondaryLayout from '../layout/SecondaryLayout';
import ErrandList from '../components/ErrandList';



function AllErrandsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedErrands, setLoadedErrands] = useState(props.state);

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
    {loadedErrands && loadedErrands.length > 0 ? <ErrandList errands={loadedErrands} setState={props.setState}/> : <h6>No errands to show</h6>}
  </section> )
}

export default AllErrandsPage;