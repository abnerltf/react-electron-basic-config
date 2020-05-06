import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function Routes() { 
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"> <h1> wow </h1> </Route>
      </Switch>
    </HashRouter>
  )
}