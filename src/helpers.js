import moment from 'moment';

const getFormattedDay = date => moment(date).format('DD');

export { getFormattedDay };
