import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Loginscreen from '../components/shared/Loginscreen';

const Frontroutes = () => (
    <Switch>
         <Route  path="/" component={Loginscreen} />
        </Switch>
)

export default Frontroutes;