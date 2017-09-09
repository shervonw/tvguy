import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import store from './store';
import './App.css';

import { NavBar, TopNav } from './modules/core/components';
import { Home } from './modules/home';
import { Show } from './modules/show';
import { Shows } from './modules/shows';
import { Episodes } from './modules/episodes';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

class App extends Component {
  
  state = {
    isMenuOpen: false
  }

  componentDidMount() {
    window.onresize = (e) => {
      const { isMenuOpen } = this.state;
      const sidenav = document.getElementById("sidenav");

      if (e.currentTarget.innerWidth >= 1024 && !isMenuOpen && sidenav) {
        sidenav.style.width = "200px";

        this.setState({
          isMenuOpen: !isMenuOpen
        });
      }
    }
  }

  openMenuButtonClick(e) {
    const { isMenuOpen } = this.state;
    const sidenav = document.getElementById("sidenav");
    
    if (!sidenav) {
      return;
    }

    if (isMenuOpen) {
      sidenav.style.width = "0px";
    } else {
      sidenav.style.width = "200px";
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
          <div>
            <div>
              <NavBar history={ history } />
              <TopNav history={ history } onClick={ (e) => this.openMenuButtonClick(e) } />
            </div>

            <Route exact path="/" component={ Home } />
            <Route exact path="/shows" component={ Shows } /> 
            <Route exact path="/shows/:id" component={ Show } /> 
            <Route exact path="/shows/:id/seasons/:season/episodes/:episode" component={ Episodes } />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
