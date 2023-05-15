import getRandomPokemonNumber from '../../src/helpers/getRandomPokemonNumber'

describe('pruebas en getRandomPokemonNumber', () => {

  test('getRandomPokemonNumber() debe retornar un número válido', () => {
    const numero = getRandomPokemonNumber()
    expect(numero).toBeGreaterThanOrEqual(1)
    expect(numero).toBeLessThanOrEqual(1010)
  })

})