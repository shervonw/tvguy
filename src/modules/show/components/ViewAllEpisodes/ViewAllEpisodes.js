import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import './style.css';

const ViewAllEpisodes = () => {
  return (
    <Row>
      <Col s={12}
        style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}
      >
        <div>
          <a className="view-all-epsiodes">
            { 'View all episodes' } <Icon tiny>navigate_next</Icon>
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default ViewAllEpisodes;