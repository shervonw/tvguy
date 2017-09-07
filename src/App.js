import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import store from './store';
import './App.css';

import { NavBar } from './modules/core/components';
import { Home } from './modules/home';
import { Show } from './modules/show';
import { Episode } from './modules/episode';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <div>
            <NavBar />
            <div className="container">
              <Row>
                <div style={{width: '100%', height: 60, background: '#fff', borderBottom: '1px solid #eee' }}>
                </div>
              </Row>
            </div>
            <div id="main">
              <Route exact path="/" component={Home} />
              <Route exact path="/show/:id" component={Show} /> 
              <Route exact path="/show/:id/season/:season/episode/:episode" component={Episode} /> 
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
