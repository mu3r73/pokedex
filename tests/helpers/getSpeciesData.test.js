import getSpeciesData from '../../src/helpers/getSpeciesData'

const ARBOK_URL = 'https://pokeapi.co/api/v2/pokemon-species/24/'

const ARBOK_DATA = {
  descs: [ 
    'El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.',
    'Para intimidar a sus enemigos, hincha el pecho y echa aire por la boca emitiendo sonidos.',
    'Este Pokémon es tremendamente fuerte, puede oprimir cualquier cosa con su cuerpo y hasta es capaz de estrujar un barril de acero. Una vez que Arbok se enrosca a su víctima, no hay forma de escapar de su asfixiante abrazo.',
    'Recientes estudios han llegado a identificar hasta una veintena de patrones distintos que puede presentar el motivo de su cuello.',
    'Tras confundir a su presa con el motivo de su cuerpo, se enrosca a su alrededor y la aferra, a la espera de que su pulso se detenga.',
    'Se han llegado a identificar hasta seis variaciones distintas de los espeluznantes dibujos de su piel.'
  ],
  genus: 'pokémon cobra',
  nameJp: 'アーボック',
}

describe('pruebas en getSpeciesData', () => {

  test('getSpeciesData(<url-valida>) debe retornar los datos correctos', async () => {
    const url = ARBOK_URL
    const expectedResult = ARBOK_DATA
    const result = await getSpeciesData(url)
    expect(result).toEqual(expectedResult)
  })

})