import React from 'react';
import { Row, Col } from 'react-materialize';
import { resolveImagePath } from '../../../core/utilities';
import Stats from '../Stats';
import './style.css';

const EpisodePoster = ({ episode }) => {
  const posterImage = (episode.image) ? episode.image.original : null;
  
  return (
    <div>
      <Row>
        <Col s={12}>
          <div className="episode-poster-container">
            <img className="responsive-img" src={ resolveImagePath(posterImage, true) } alt={ episode.name } />
          </div>
        </Col>
      </Row>
      <Stats episode={ episode } /> 
    </div>
  );
}

export default EpisodePoster;