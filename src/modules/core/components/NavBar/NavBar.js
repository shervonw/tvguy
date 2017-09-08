import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './style.css';


class NavBar extends Component {

  render() {
    return (
      <div>
        <div id="sidenav" className="sidenav-container">
          <a
            style={{ display: 'flex', height: 40, justifyContent: 'flex-start', alignItems: 'center', padding: 20, boxSizing: 'border-box', background: '#eee' }}
            onClick={ () => this.props.history.goBack() }
          >
            Back
          </a>
          <div className="divider"></div>
          <h4 style={{ color: '#3D3D3D', textAlign: 'center' }}>TV Guy</h4>
          <div className="sidenav-items-container">
            <NavLink
              className="sidenav-item"
              exact
              to="/"
              activeStyle={{ background: '#aaa', color: '#fff', }}
            >
              <div className="sidenav-icon-container">
                <Icon>home</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              className="sidenav-item"
              to="/shows"
              activeStyle={{ background: '#aaa', }}
            >
              <div className="sidenav-icon-container">
                <Icon>tv</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>TV Shows</span>
              </div>
            </NavLink>
            <NavLink
              className="sidenav-item"
              to="/genres"
              activeStyle={{ background: '#aaa', }}
            >
              <div className="sidenav-icon-container">
                <Icon>art_track</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>Genres</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }  
}

export default NavBar;