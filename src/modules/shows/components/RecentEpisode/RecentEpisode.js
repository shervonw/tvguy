import React from 'react';
import moment from 'moment';
import { Col } from 'react-materialize';
import { pad, resolveImagePath } from '../../../core/utilities';
import './style.css';

const RecentEpisode = ({ id, episode, title }) => {
  const posterImage = (episode.image) ? episode.image.original : null;
  const splittedTitle = title.split(' ');

  return (
    <Col s={12} m={6}>
      <div className="recent-episode-container">
        <h5>
          <b>{ splittedTitle[0] }</b>
          <span>{ splittedTitle[1] }</span>
        </h5>
        <div className="recent-episode-poster-container">
          <img className="responsive-img" src={ resolveImagePath(posterImage, true) } alt={ episode.name }/>
          <div className="recent-episode-titles-container">
            <a href={ `/shows/${id}/seasons/${episode.season}/episodes/${episode.number}` }>
              <div>
                <span className="blue white-text">
                  { moment(episode.airstamp).format("MMM D, YYYY h:mm a") }
                </span>
              </div>
              <div className="recent-episode-titles">
                <b>
                  { `${episode.season}x${pad(episode.number)}` }
                </b>
                { episode.name }
              </div>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RecentEpisode;
