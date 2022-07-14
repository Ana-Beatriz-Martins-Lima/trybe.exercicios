const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber o parametro , deve retornar o que se espera', () => {
    // teste para o argumento count
    expect(handlerElephants('count')).toBe(4);
    // teste para o argumento names
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    // teste para o argumento averageAge
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    // caso não passe um argumento esperado
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('ao receber o parametro location, deve retornar uma string = NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('ao receber o parametro popularity, deve retornar um numero igual ou maior que 5', () => {
    expect(handlerElephants('popularity')).toBeCloseTo(5);
  });
  it('ao receber o parametro availability, deve retornar um array SEM monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it(' não recebe parametros , deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
