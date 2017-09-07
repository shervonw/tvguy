import React from 'react';
import { resolveImagePath } from '../../../core/utilities';
import {
  Icon
} from 'react-materialize';
import Stats from '../Stats';

const EpisodePoster = ({ episode }) => {
  const posterImage = (episode.image) ? episode.image.original : null;

  console.log(posterImage)

  return (
    <div>
      <div style={{ background: '#3D3D3D',width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', height: 450 }}>
          <img style={{ height: 'inherit', width: 'inherit', }} src={ resolveImagePath(posterImage, true) } alt={ episode.name } />
        </div>
      </div>
      <Stats episode={ episode } /> 
    </div>
  );
}

export default EpisodePoster;