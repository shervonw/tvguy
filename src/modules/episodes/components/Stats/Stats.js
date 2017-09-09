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
      { (episode.number === 1) &&
        <span className="green white-text" style={{ fontSize: '0.7rem', paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5 }}>
          Season Premiere
        </span>
      }
      <h1 style={{ margin: '1rem 0 1.56rem 0' }}>
        { `${episode.season}x${pad(episode.number)}` } { episode.name }
      </h1>
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