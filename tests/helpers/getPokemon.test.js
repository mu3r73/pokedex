import getPokemon from '../../src/helpers/getPokemon'

const ARBOK_DATA = {
  id: 24,
  name: 'arbok',
  descriptionUrl: 'https://pokeapi.co/api/v2/pokemon-species/24/',
  typesUrls: [
    'https://pokeapi.co/api/v2/type/4/',
  ],
  weight: 650,
  height: 35,
  spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
  shinySpriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png',
}

describe('pruebas en getPokemon', () => {

  test('getPokemon(<nombre-válido-de-pokémon>) debe retornar los datos correctos', async () => {
    const name = 'arbok'
    const expectedResult = ARBOK_DATA
    const result = await getPokemon(name)
    expect(result).toEqual(expectedResult)
  })

  test('getPokemon(<número-válido-de-pokémon>) debe retornar los datos correctos', async () => {
    const number = 24
    const expectedResult = ARBOK_DATA
    const result = await getPokemon(number)
    expect(result).toEqual(expectedResult)
  })

  test('getPokemon(<nombre-no-válido-de-pokémon>) debe lanzar un error', async () => {
    const name = 'digimon'
    await expect(getPokemon(name))
      .rejects
      .toThrow()
  })

  test('getPokemon(<número-no-válido-de-pokémon>) debe lanzar un error', async () => {
    const number = 123456
    await expect(getPokemon(number))
      .rejects
      .toThrow()
  })

})