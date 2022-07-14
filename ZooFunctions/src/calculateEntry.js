const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrada) => entrada.age < 18);
  const adult = entrants.filter((entrada) => entrada.age >= 18 && entrada.age < 50);
  const senior = entrants.filter((entrada) => entrada.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  {
    const o = countEntrants(entrants);
    const sum = (o.child * prices.child) + (o.adult * prices.adult) + (o.senior * prices.senior);
    return sum;
  }
}

module.exports = { calculateEntry, countEntrants };
