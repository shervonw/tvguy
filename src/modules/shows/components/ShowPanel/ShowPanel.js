import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Summary } from '../../../core/components';
import { resolveImagePath } from '../../../core/utilities';
import './style.css';


const ShowPanel = ({ result }) => {
  const { image } = result.show;
  const tvShowPoster = (image) ? image.medium : null;
  const country = (result.show.network) ? result.show.network.country.name : "Unknown";

  return (
    <Link to={`shows/${result.show.id}`}>
      <Row className="shows-container">
        <Col s={4} l={3} className="shows-image-container">
          <img className="responsive-img shows-img" src={ resolveImagePath(tvShowPoster) } alt={ result.show.name } />
        </Col>
        <Col s={8} l={9} className="shows-text-container">
          <div className="fade">
            <h5>
              <span>{ result.show.name }</span>
              <span>{ result.score.toFixed(2) }</span>
            </h5>
            <p className="shows-country">{ country }</p>
            <Summary summary={ result.show.summary } classes={[ 'shows-summary-text' ]} />
          </div>        
        </Col>
      </Row>
    </Link>
  )
}

export default ShowPanel;