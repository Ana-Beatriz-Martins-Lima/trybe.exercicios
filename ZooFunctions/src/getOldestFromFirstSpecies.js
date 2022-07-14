const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const array = [];
  const animalMaisVelho = [];
  const pessoa = employees.find((funcionario) => funcionario.id === id);
  const animais = pessoa.responsibleFor;

  const animal = species.find((e) => e.id === animais[0]);

  const residentes = animal.residents;
  residentes.forEach((e) => array.push(e.age));
  const numero = Math.max(...array);

  const objetoAnimal = residentes.find((e) => e.age === numero);

  animalMaisVelho.push(objetoAnimal.name, objetoAnimal.sex, objetoAnimal.age);

  return animalMaisVelho;
}

module.exports = getOldestFromFirstSpecies;
