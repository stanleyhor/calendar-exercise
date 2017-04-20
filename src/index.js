import React from 'react';
import ReactDOM from 'react-dom';
import MapApp from './components/MapApp';
import './index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MapApp}>
        <IndexRoute component={MapApp}></IndexRoute>
        <Route path="/event/:eventDay" component={MapApp} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));