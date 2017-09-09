import React from 'react';
import { Row, Col } from 'react-materialize';


const TopNav = ({ history, onClick }) => {
  if (history.location.pathname === '/') {
    return null;
  }

  return(
    <div id="topnav" className="container">
      <Row>
        <Col s={12} style={ navStyle } onClick={ onClick }>
          menu
        </Col>
        <Col s={12}>
          <div className="divider"></div>
        </Col>
      </Row>
    </div>
  );
}

const navStyle = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-end', 
  width: '100%', height: 50, 
  background: '#fff', 
  paddingTop: 20,
  paddingRight: 10,
  paddingBottom: 20,
  textTransform: 'uppercase'
}


export default TopNav;