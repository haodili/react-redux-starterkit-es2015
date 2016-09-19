import React from 'react';
import { render } from 'react-dom';
import MainComponent  from './containers/Main';
import HomeComponent  from './containers/Home';

import AboutComponent  from './containers/About';
import { Provider } from 'react-redux';
import store from './redux-stuff/store';
import { Router, Route, Link, browserHistory } from 'react-router';




render((
  <Provider store={store}>
  <Router>
    <Route  component={MainComponent}>
       <Route  path="/" component={HomeComponent} />
       <Route path="/about" component={AboutComponent}/>
    </Route>
  </Router>
  </Provider>
),document.querySelector('.root'))
