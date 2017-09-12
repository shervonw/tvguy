import React from 'react';
import moment from'moment';
import { Table } from 'react-materialize';
import { showExternals } from '../../constants';
import { airDays, dateFormat, timeFormat } from '../../../core/utilities';
import { map } from 'lodash';
import './style.css';


const AdditionalStats = ({ show }) => {

  const network = (show.network) ? show.network.name : "(Unknown Network)";

  return (
    <div className="details">
      <h1>
          { show.name } <span>({ moment(show.premiered).format('YYYY') })</span>
      </h1>
      <Table className="bordered">
        <tbody>
          <tr>
            <td>Airs</td>
            <td>{`${airDays(show.schedule.days)} at ${timeFormat(show.schedule.time)} on ${network}`}</td>
          </tr>
          <tr>
            <td>Genres</td>
            <td>{(show.genres.length > 0) ? show.genres.join(', ') : ["None"].join(', ')}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{ show.status || "None" }</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{ show.language || "None" }</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{ show.type || "None" }</td>
          </tr>
          <tr>
            <td>Runtime</td>
            <td>{ show.runtime || 0 } mins</td>
          </tr>
          <tr>
            <td>Premiered</td>
            <td>{ dateFormat(show.premiered) }</td>
          </tr>
        </tbody>
      </Table>
      <ul className="external">
        <li >
          <a href={ show.officialSite } target="_blank">Official Website</a>
        </li>
        <li>
          <a href={ show.url } target="_blank">TVMaze</a>
        </li>
        {
          map(show.externals, (id, type) => {
            if (showExternals[type]) {
              return (
                <li key={ type }>
                  <a href={ showExternals[type] + id } target="_blank">{ type.toUpperCase() }</a>
                </li>
              );
            }
          })
        }
      </ul>
    </div>
  )
};

export default AdditionalStats;