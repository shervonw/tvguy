import React from 'react';
import { EpisodePanel } from '../../components';
import './style.css';


const EpisodeList = ({ id, allEpisodes }) => {
  return(
    <div>
      <div className="episode-list-title-container">
        <h4>All Episodes</h4>
        <p>
          <b>{ `${Object.keys(allEpisodes).length} ` }</b>
          <span>episodes</span>
        </p>
      </div>

      <div>
        {
          Object.keys(allEpisodes).map(key => {
            return (
              <EpisodePanel
                key={ key }
                id={ id }
                episode={ allEpisodes[key] }
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default EpisodeList;