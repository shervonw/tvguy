import React from 'react';
import { resolveImagePath } from '../../../core/utilities';
import {
  Row, Col, Icon
} from 'react-materialize';
import AdditionalStats from '../AdditionalStats';
import './style.css';

const Poster = ({ show }) => {
  const posterImage = (show.image) ? show.image.original : null;

  return (
    <div>
      <div className="tv-show-poster">
        <div className="tv-show-poster-img">
          <img style={{ height: 'inherit', width: 'inherit', }} src={ resolveImagePath(posterImage) } alt={ show.name } />
        </div>
        <AdditionalStats show={ show } /> 
      </div>
      <div style={{ marginTop: 8 }}>
        <div className="divider"></div>
        <Row className="ratings">
          <Col s={6} m={4} className="rating-item">
            <Icon small className="blue-text text-darken-1" >thumb_up</Icon>
            <div className="rating-container">
              <div className="rating">{ `${show.rating.average || 0} / 10` }</div>
              <div className="rating-text">average</div>
            </div>
          </Col>
          <Col s={6} m={4} className="rating-item">
            <Icon small className="red-text text-darken-1" >favorite</Icon>
            <div className="rating-container">
              <div className="rating">{ show.weight || 0 }%</div>
              <div className="rating-text">weight</div>
            </div>
          </Col>
          <Col s={12} m={4} className="rating-item">
            <Icon small className="amber-text text-darken-1" >star_border</Icon>
            <div className="rating-container">
              <div className="rating">Favorite</div>
              <div className="rating-text">{ show.name }</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Poster;