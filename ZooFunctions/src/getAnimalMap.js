const data = require('../data/zoo_data');

const { species } = data;

const findAllAnimals = (param) => species.filter((e) => e.location === param)
  .map((element) => element.name);

const findAnimalsBySex = (param1, param2) => {
  const bunchOfAnimals = species.filter((e) => param1.includes(e.name));
  const checkAnimalSex = [];
  bunchOfAnimals.forEach((e) => {
    const myAnimal = e.residents.some((el) => el.sex === param2);
    checkAnimalSex.push(myAnimal);
  });
  return checkAnimalSex;
};

const animalSex = (func1, func2) => {
  const result = [];
  func1.forEach((e, index) => {
    if (e === true) {
      result.push(func2[index]);
    }
  });
  return result;
};

const namesInclude = (param) => {
  const residents = species.filter((e) => e.name === param);
  return residents[0].residents.map((e) => e.name);
};

const animalNames = (param) => {
  const object = [];
  param.forEach((e) => {
    const obj = {};
    obj[e] = namesInclude(e);
    object.push(obj);
  });
  return object;
};
function getAnimalMap(options) {
  if (!options) {
    return {
      NE: findAllAnimals('NE'),
      NW: findAllAnimals('NW'),
      SE: findAllAnimals('SE'),
      SW: findAllAnimals('SW'),
    };
  }
  const letMeSee = Object.entries(options);
  if (letMeSee[0].includes('includeNames')) {
    return {
      NE: animalNames(findAllAnimals('NE')),
      NW: animalNames(animalSex(findAnimalsBySex(findAllAnimals('NW'),
        'female'), findAllAnimals('NW'))),
      SE: animalNames(findAllAnimals('SE')),
      SW: animalNames(findAllAnimals('SW')),
    };
  }
}

module.exports = getAnimalMap;
