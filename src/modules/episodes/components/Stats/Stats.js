import React from 'react';
import moment from 'moment';
import { Table } from 'react-materialize';
import { pad, timeFormat } from '../../../core/utilities';

const Stats = ({ episode }) => {
  const airTense = (date) => {
    if (moment().isAfter(date)) {
      return 'ed';
    } else {
      return 's';
    }
  }
  
  return (
    <div className="details">
      <h1 style={{ marginTop: '1rem', marginBottom: 2 }}>
        { `${episode.season}x${pad(episode.number)}` } { episode.name }
      </h1>
      <div style={{ marginBottom: '2rem' }}>
        { (episode.number === 1) &&
          <span className="green white-text" style={{ fontSize: '0.7rem', paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, marginBottom: '2rem', borderRadius: 2 }}>
            Season Premiere
          </span>
        }
      </div>
      <Table className="bordered">
        <tbody>
          <tr>
            <td>{`Air${airTense(episode.airdate)}`}</td>
            <td>{`${moment(episode.airstamp).format('MMMM DD, YYYY')} at ${timeFormat(episode.airtime)}`}</td>
          </tr>
          <tr>
            <td>Runtime</td>
            <td>{ episode.runtime || 0 } mins</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Stats;