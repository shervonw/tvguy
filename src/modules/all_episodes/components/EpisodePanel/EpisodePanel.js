import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Icon } from 'react-materialize';
import { Summary } from '../../../core/components';
import { dateFormat, timeFormat, resolveImagePath, pad } from '../../../core/utilities';
import './style.css';


const EpisodePanel = ({ id, episode }) => {
  const { image } = episode;
  const tvShowPoster = (image) ? image.medium : null;

  const isSpecial = (season, number) => {
    if (number) {
      return `${season}x${pad(number)} `;
    } else {
      return `Special ${season} `;
    }
  }

  return (
    <Row>
      <Link 
        className="episode-panel-container"
        to={ `/shows/${id}/seasons/${episode.season}/episodes/${episode.number || 1}` }
      >
        <div className="episode-panel-img-container">
          <img className="responsive-img" src={ resolveImagePath(tvShowPoster, true) } alt={ episode.name } />
        </div>
        <div className="episode-panel-text-container">
          <div>
            <h4>
              <span>
                <span>{ isSpecial(episode.season, episode.number) }</span>
                { episode.name }
              </span>
              <p>
                { 
                  (episode.number === 1) &&
                  <span className="green white-text" style={seasonPremiereStyle}>
                    Season Premiere
                  </span>
                }

                { `${ dateFormat(episode.airdate) } ${ timeFormat(episode.airtime) }` }
                <i>{ ` - ${episode.runtime} mins` }</i>
              </p>
            </h4>
            <div>
              <Icon>play_circle_outline</Icon>
            </div>
          </div>
          <Summary
            summary={ episode.summary }
            summaryStyle={{ marginTop: 50, marginBottom: 50 }}
            classes={[ 'shows-summary-text', 'episode-panel-summary-text' ]}
          />
        </div>
      </Link>
    </Row>
  );
}

const seasonPremiereStyle = {
  fontSize: '0.7rem',
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 5,
  paddingRight: 5,
  marginRight: 4,
  marginBottom: '2rem',
  borderRadius: 2
}

export default EpisodePanel;