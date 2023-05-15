import getType from '../../src/helpers/getType'

const ARBOK_URL = 'https://pokeapi.co/api/v2/type/4/'

const ARBOK_DATA = {
  name: 'veneno',
  nameEn: 'poison',
}

describe('pruebas en getType', () => {

  test('getType(<url-valida>) debe retornar los datos correctos', async () => {
    const url = ARBOK_URL
    const expectedResult = ARBOK_DATA
    const result = await getType(url)
    expect(result).toEqual(expectedResult)
  })

})
