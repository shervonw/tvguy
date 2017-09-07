import React from 'react';
import { resolveImagePath } from '../../../core/utilities';
import {
  Icon
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
        <ul className="ratings">
          <li>
            <Icon small className="blue-text text-darken-1" >thumb_up</Icon>
            <div className="rating-container">
              <div className="rating">{ `${show.rating.average || 0} / 10` }</div>
              <div className="rating-text">average</div>
            </div>
          </li>
          <li>
            <Icon small className="red-text text-darken-1" >favorite</Icon>
            <div className="rating-container">
              <div className="rating">{ show.weight || 0 }%</div>
              <div className="rating-text">weight</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Poster;