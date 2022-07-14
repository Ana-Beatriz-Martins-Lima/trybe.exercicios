const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');
// refatoracao com a ajuda de Matheus Oliveira

function getSchedule(scheduleTarget) {
  const resultA = species.filter((element) => element.name === scheduleTarget);
  const horarios = Object.entries(hours);
  const objeto = {};
  horarios.forEach((dia) => {
    objeto[dia[0]] = {
      officeHour: `Open from ${dia[1].open}am until ${dia[1].close}pm`,
      exhibition: species.filter((especie) =>
        especie.availability.includes(dia[0])).map(({ name }) => name),
    };
  });
  objeto.Monday = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
  if (scheduleTarget === undefined) { return objeto; }
  if (resultA.length > 0) { return resultA[0].availability; }
  if (horarios.some((dia) => dia[0] === scheduleTarget) === true) {
    if (scheduleTarget === 'Monday') return { Monday: objeto.Monday };
    return { [scheduleTarget]: objeto[scheduleTarget] };
  }
  return objeto;
}
module.exports = getSchedule;
