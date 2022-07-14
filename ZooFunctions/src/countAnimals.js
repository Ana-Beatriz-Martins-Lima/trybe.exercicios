const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const popuAnimal = {};
  if (!animal) {
    species.forEach((elemento) => {
      popuAnimal[elemento.name] = elemento.residents.length;
    });
    return popuAnimal;
  } if (typeof animal.sex === 'undefined') {
    const espAnimal = data.species.find((i) => i.name === animal.specie);
    return espAnimal.residents.length;
  }
  return species.find((specie) => animal.specie === specie.name).residents
    .reduce((acc, curr, index) => {
      if (curr.sex === animal.sex) {
        return acc + 1;
      }
      return acc;
    }, 0);
}

module.exports = countAnimals;
