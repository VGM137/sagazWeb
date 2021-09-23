import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Guisados from '../containers/Guisados';
import NotFound from '../containers/NotFound';
import '../assets/styles/App.scss';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/guisados' component={Guisados}/>
      <Route component = {NotFound} />
    </Switch>
  </HashRouter>
)

export default App
