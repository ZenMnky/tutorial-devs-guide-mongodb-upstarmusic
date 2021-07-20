import Artist from '../models/artist';

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
export default () => {
  const minQuery = Artist.find({})
    .sort({ yearsActive: 'asc' })
    .limit(1)
    .then((artist) => artist[0].yearsActive);
  const maxQuery = Artist.find({})
    .sort({ yearsActive: 'desc' })
    .limit(1)
    .then((artist) => artist[0].yearsActive);
  return Promise.all([minQuery, maxQuery]).then((years) => {
    return {
      min: years[0],
      max: years[1],
    };
  });
};
