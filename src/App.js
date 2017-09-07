import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Icon, Row } from 'react-materialize';

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
  
  state = {
    isMenuOpen: true
  }

  componentDidMount() {
    window.onresize = (e) => {
      const { isMenuOpen } = this.state;

      if (e.currentTarget.innerWidth >= 1024) {
        if (!isMenuOpen) {
          document.getElementById("sidenav").style.width = "200px";
        }

        this.setState({
          isMenuOpen: !isMenuOpen
        });
      }
    }
  }

  openMenuButtonClick(e) {
    const { isMenuOpen } = this.state;

    if (isMenuOpen) {
      document.getElementById("sidenav").style.width = "0px";
    } else {
      document.getElementById("sidenav").style.width = "200px";
    }

    this.setState({
      isMenuOpen: !isMenuOpen
    });
  }

  render() {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={ history }>
          {
            (history.location.pathname !== '/') &&
            <div>
              <NavBar history={ history } />
              <div id="topnav" className="container">
                <Row>
                  <div style={navStyle} onClick={(e) => this.openMenuButtonClick(e)}>
                    menu
                  </div>
                </Row>
              </div>
              <div id="main">
                <Route exact path="/" component={ Home } />
                <Route exact path="/show/:id" component={ Show } /> 
                <Route exact path="/show/:id/season/:season/episode/:episode" component={ Episode } /> 
              </div>
            </div>
          }
        </ConnectedRouter>
      </Provider>
    );
  }
}

const navStyle = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  width: '100%', height: 40, 
  background: '#fff', 
  paddingTop: 20,
  paddingRight: 10,
  boxSizing: 'border-box',
  textTransform: 'uppercase'
}

export default App;
