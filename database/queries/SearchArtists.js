import Artist from '../models/artist';

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 * expected shape: { all: [artists], count: count, offset: offset, limit: limit}
 */
export default (criteria, sortProperty, offset = 0, limit = 20) => {
  const count = Artist.count();
  //   const { name, age, yearsActive } = criteria;

  //   const searchQuery = Artist.find({ name: { $regex: `/${name}/i` } }, age: {});
  const searchQuery = Artist.find({})
    .sort({ [sortProperty]: 'asc' })
    .skip(offset)
    .limit(limit);

  return Promise.all([searchQuery, count]).then((results) => {
    return {
      all: results[0],
      count: results[1],
      offset,
      limit,
    };
  });
};
