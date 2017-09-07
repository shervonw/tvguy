import React, { Component } from 'react';
import {
  Icon
} from 'react-materialize';
import './style.css';


class NavBar extends Component {
  state = {
    isMenuOpen: false
  }

  componentDidMount() {
  }

  openMenuButtonClick(e) {
    document.getElementById("sidenav").style.width = "55px";
    document.getElementById("main").style.marginLeft = "45px";

    this.setState({
      isMenuOpen: true
    });
  }

  closeMenuButtonClick(e) {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";

    this.setState({
      isMenuOpen: false
    });
  }

  render() {
    return (
      <div>
        <div id="sidenav" className="sidenav-container">{/*style={{...this.state.sidenavDisplay}}*/}
          <h4 style={{ color: '#3D3D3D', textAlign: 'center' }}>TV</h4>
          <div className="sidenav-items-container">
            <div className="sidenav-item">
              <div className="sidenav-icon-container">
                <Icon small>home</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>Home</span>
              </div>
            </div>
            <div className="sidenav-item">
              <div className="sidenav-icon-container">
                <Icon small>tv</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>TV Shows</span>
              </div>
            </div>
            <div className="sidenav-item">
              <div className="sidenav-icon-container">
                <Icon small>art_track</Icon>
              </div>
              <div className="sidenav-text-container">
                <span>Genres</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

export default NavBar;