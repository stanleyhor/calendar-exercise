import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MapApp from './components/MapApp';
import './index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const MainApp = ({ match }) => {
  return class MainApp extends PureComponent {
    render() {
      return (
        <App {...this.props} day={match.params.day}/>
      )
    }
  }
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MapApp}>
        <IndexRoute component={MainApp}></IndexRoute>
        <Route path="/:day" component={MainApp} />
      </Route>
    </Router>
  </Provider>
);


ReactDOM.render(router, document.getElementById('root'));

