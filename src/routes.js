import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Cart from './components/Cart/Cart';

export default (
<HashRouter>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/cart" component={Cart} />
  </Switch>
</HashRouter>
)