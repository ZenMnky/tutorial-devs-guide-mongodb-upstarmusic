import Artist from '../models/artist';

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
export default () => {
  const minQuery = Artist.find({})
    .sort({ age: 'asc' })
    .limit(1)
    .then((artist) => artist[0].age);
  const maxQuery = Artist.find({})
    .sort({ age: 'desc' })
    .limit(1)
    .then((artist) => artist[0].age);
  return Promise.all([minQuery, maxQuery]).then((ages) => {
    return {
      min: ages[0],
      max: ages[1],
    };
  });
};
