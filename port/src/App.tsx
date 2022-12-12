import React from 'react';
import Home from './pages/Home';
import {useLocation, useRoutes} from 'react-router-dom'
import Work from './pages/Work';
import WorkDetails from './pages/WorkDetails';

function App() {

  const location = useLocation();


  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/work', element: <Work />},
    {path: '/work/details', element: <WorkDetails location={{
      state: {
        data: location.state
      }
    }} />},

  ]);

  return element;

}



export default App;
