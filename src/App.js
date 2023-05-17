import './App.css';

import Layout from './layout/Layout.js';
import SecondaryLayout from './layout/SecondaryLayout';
import { Routes, Route } from 'react-router-dom';
// import useGeoLocation from '../hooks/useGeoLocation';
import { useEffect, useState } from 'react';

import AppLoadingPage from './pages/AppLoadingPage';
import AddErrandsPage from './pages/AddErrandsPage';
import AllErrandsPage from './pages/AllErrandsPage';
import SettingsPage from './pages/SettingsPage';
import StatisticsPage from './pages/StatisticsPage';
// import ErrandsPage from './pages/ErrandsPage';
import PrioritiesPage from './pages/PrioritiesPage';
import CompletedPage from './pages/CompletedPage';

function App() {
  const [loadedLocation, setLoadedLocation] = useState({lat: '', lng: ''});
  const [isLoading, setLoading] = useState(true);
  const [state, setErrandsState] = useState(
    // [{
    // name: 'Go to Shops',
    // notes: 'Make sure that you go before 5pm and pick up some bananas and milk.',
    // id: 1,
    // lat: 53.4009223,
    // lng: -0.3401704,
  // },
  // {
  //   name: 'Play Tennis',
  //   notes: 'Meet at the tennis club for a tournament match at 7pm.',
  //   id: 2,
  //   lat: 53.4009223,
  //   lng: -0.3501704,
  // },
  // {
  //   name: 'Go to Bank',
  //   notes: 'Go tomorrow to the bank to register for a new savings account.',
  //   id: 3,
  //   lat: 53.4009223,
  //   lng: -0.3601704,
  // }]
  null
  )

  const handleSetState = (Errand, add=true) => {
    if (state && add===true) {
      setErrandsState(prevState => [...prevState, Errand]);
    } else if (state && add===false) {
      console.log("deleting errand")
      setErrandsState(prevState => {return prevState.filter(errand => errand.id !== Errand);})
    } else
      setErrandsState([Errand]);
  }


  // One-time Run of GeoLocation API to retrieve location. App loads in after coords retrieved.
  useEffect(() => {
    const getLocation = function() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
    getLocation().then(
      function(geoObj) {
        const coordinates = {
          lat: geoObj.coords.latitude,
          lng: geoObj.coords.longitude,
        }
        setLoadedLocation(coordinates);
        setLoading(false);
      }
      ).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(state);
  }, [state])

  // If GeoLocation still retrieving location show loading page for app.
  if(isLoading) {
    return (
      <AppLoadingPage />
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<SecondaryLayout />}>
            <Route index element={<AllErrandsPage state={state} setState={handleSetState}/>}>
                    </Route>
            <Route path='priorities' element={<PrioritiesPage state={state} setState={handleSetState}/>}>
                    </Route>
            <Route path='completed' element={<CompletedPage state={state} setState={handleSetState}/>}>
                    </Route>
        </Route>
        <Route path='/add_errand' element={<AddErrandsPage state={state} setState={handleSetState} location={loadedLocation}/>}>
                </Route>
        <Route path='/stats' element={<StatisticsPage state={state} setState={handleSetState}/>}>
                </Route>
        <Route path='/settings' element={<SettingsPage state={state} setState={handleSetState}/>}>
                </Route>
      </Routes>
    </Layout>
  );
}

export default App;
