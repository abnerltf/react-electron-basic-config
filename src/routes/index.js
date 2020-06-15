import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home'

export default function Routes() { 
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </HashRouter>
  )
}