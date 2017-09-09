import React from 'react';
import { Row } from 'react-materialize';


const TopNav = ({ history, onClick }) => {
  if (history.location.pathname === '/') {
    return null;
  }

  return(
    <div id="topnav" className="container">
      <Row>
        <div style={ navStyle } onClick={ onClick }>
          menu
        </div>
      </Row>
    </div>
  );
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


export default TopNav;