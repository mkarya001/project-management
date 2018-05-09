import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Testfront from '../components/shared/Testfront';

import Testback from '../components/shared/Testback'; 
 const Dashboardroutes = (props) => {
  const path = props.match.path;
  return(
    <Switch>
      <Route  path={`${path}/test`} component={Testback} />
      <Route  path='/' component={Testfront} />
     </Switch> 
  )
 }

export default Dashboardroutes;