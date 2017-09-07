import request from 'superagent';
import { GAS_API_URL } from '../core/constants';

const tvmaze = (params, callback) => {
  request
    .get(GAS_API_URL)
    .query(params) // sends a JSON post body
    .set('Accept', 'application/json')
    .end((err, res) => {
      callback(err, res);
    });
}

export default tvmaze;