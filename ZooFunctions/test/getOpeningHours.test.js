const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('ao receber o parametro Thu e 9:00-AM, deve retornar the day must be valid', () => {
    expect(() => { getOpeningHours('Thu', '9:00-AM'); }).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('ao receber o parametro Friday e 9:00-ZM, deve retornar the abbreviation be \'AM\' or \'PM\'', () => {
    expect(() => { getOpeningHours('Friday', '9:00-ZM'); }).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('ao receber o parametro Saturday e C9:00-AM, deve retornar the hour should represent a number', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(/^The hour should represent a number$/);
  });
  it('ao receber o parametro Sunday e C9:c0-AM, deve retornar the minutes should represent a number', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow(/^The minutes should represent a number$/);
  });
  it('ao receber o parametro Monday 9:00-AM , deve retornar the zoo is closed ', () => {
    expect(getOpeningHours('monday', '9:00-AM')).toBe('The zoo is closed');
  });
  it('ao receber o parametro tuesday e 9:00, deve retornar the zoo is open', () => {
    expect(getOpeningHours('Tuesday', '9:00-AM')).toBe('The zoo is open');
  });
  it('ao receber o parametro Wednesday e 9:00-PM, deve retornar the zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '9:00-PM')).toBe('The zoo is closed');
  });
  it(' não recebe parametros , deve retornar um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
