import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { CompletedContextProvider } from '../src/contexts/completed-context';
import { PrioritiesContextProvider } from '../src/contexts/priority-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CompletedContextProvider>
<PrioritiesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</PrioritiesContextProvider>
</CompletedContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
