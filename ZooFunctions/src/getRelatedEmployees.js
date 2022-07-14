const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((i) => i.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const filter = data.employees.filter((employee) => employee.managers.includes(managerId));
  const array = filter.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  if (isManager(managerId) === true) {
    return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
