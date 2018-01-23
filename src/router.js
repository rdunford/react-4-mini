import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

export default (
        <Switch>
            <Route component={Route1} exact path='/' />
            <Route component={Route2} path='/2' />
            <Route component={Route3} path='/3' />
        </Switch>
    )
