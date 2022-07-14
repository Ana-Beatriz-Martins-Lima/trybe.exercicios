const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  const nome = employees.find((funcionario) => funcionario.firstName === employeeName);
  const sobrenome = employees.find((funcionario) => funcionario.lastName === employeeName);
  if (nome !== undefined) {
    return nome;
  }
  if (sobrenome !== undefined) {
    return sobrenome;
  }
}

module.exports = getEmployeeByName;
