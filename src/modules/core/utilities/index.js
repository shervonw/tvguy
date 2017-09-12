import moment from'moment';
import _ from 'lodash';

import {
  noPosterPortrait,
  noPosterLandscape
} from '../constants';


export const actionCreator = (type, payload) => ({
  type: type,
  payload: payload
});

export const resolveImagePath = (imgPath, isLandscape) => {
  if (!imgPath) {
    imgPath = (isLandscape) ? noPosterLandscape : noPosterPortrait;
  }
  return imgPath;
}

export const airDays = (days) => {
  const week = moment.weekdays();
  const diff = _.difference(week, days);
  
  if (days.length === 0) {
    return '';
  }
  
  if (diff.length === 0) {
    return 'Everyday at';
  } else if (diff.length === 1) {
    return 'Everyday except for ' + diff[0] + 's';
  } else if (diff.length >= 2 && diff.length < 6) {

    const daysWithS = days.map(day => {
      return day + 's';
    });

    daysWithS.splice(-1, 0, 'and');

    return daysWithS;

  } else if (diff.length >= 6) {
    return days[0] + 's';
  }
}

export const dateFormat = (date) => {
  if (date === '' || date === null || !date) {
    return 'unknown';
  } else {
    return moment(date).format('MMMM D, YYYY');
  }
}

export const timeFormat = (time) => {
  if (time === '' || time === null || !time) {
    return 'unknown';
  } else {
    return moment(time, 'HH:mm').format('h:mma');
  }  
}

export const pad = (n) => {
  return (n < 10) ? ("0" + n) : n;
}