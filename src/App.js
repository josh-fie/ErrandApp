import './App.css';

import Layout from './layout/Layout.js';
import { Routes, Route } from 'react-router-dom';
import AllErrandsPage from './pages/AllErrandsPage';
import AddErrandsPage from './pages/AddErrandsPage';
import SettingsPage from './pages/SettingsPage';
import StatisticsPage from './pages/StatisticsPage';


function App() {

  let state = [{
    name: 'Go to Shops',
    notes: 'Make sure that you go before 5pm and pick up some bananas and milk.',
    isPriority: true,
    isCompleted: false,
    id: 1,
  },
  {
    name: 'Play Tennis',
    notes: 'Meet at the tennis club for a tournament match at 7pm.',
    isPriority: true,
    isCompleted: false,
    id: 2,
  },
  {
    name: 'Go to Bank',
    notes: 'Go tomorrow to the bank to register for a new savings account.',
    isPriority: false,
    isCompleted: true,
    id: 3,
  }]

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllErrandsPage state={state}/>}>
                </Route>
        <Route path='/add_errand' element={<AddErrandsPage state={state}/>}>
                </Route>
        <Route path='/stats' element={<StatisticsPage state={state}/>}>
                </Route>
        <Route path='/settings' element={<SettingsPage state={state}/>}>
                </Route>
      </Routes>
    </Layout>
  );
}

export default App;
