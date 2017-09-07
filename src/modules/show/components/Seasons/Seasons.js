import React from 'react';
import { resolveImagePath } from '../../../core/utilities';
import {
  Row, Col
} from 'react-materialize';
import './style.css';


const Seasons = ({ seasons }) => {
  return (
    <Row>
      <Col s={12}>

        <h4 style={{ fontWeight: 500, textAlign: 'center', marginTop: '50px', }}>Seasons</h4>
        <div className="divider"></div>
        <div style={{ marginTop: '10px' }}>
          {
            seasons.map((season, key) => {
              const { image } = season;
              const poster = (image) ? image.original : null;

              return (
                <div key={ key } className="season-poster">
                  <img src={ resolveImagePath(poster) } alt={ season.number }/>
                  <div className="season-poster-text-container">
                    <p className="season-text">Season { season.number }</p>
                    <p className={`episode-text${(!season.episodeOrder) ? ' white-out' : ''}`}>
                      { season.episodeOrder } episodes
                    </p>
                  </div>
                </div>
              )
            })  
          }
        </div>
      </Col>
    </Row>  
  );
}

export default Seasons;