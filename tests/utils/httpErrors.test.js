import getErrorDescription from '../../src/utils/httpErrors'

describe('pruebas en httpErrors', () => {

  test('getErrorDescription(<código-de-error-válido>) debe retornar la descripción correcta', () => {
    const errorCode = 400
    const expectedDesc = 'bad request'
    const desc = getErrorDescription(errorCode)
    expect(desc).toBe(expectedDesc)
  })

  test('getErrorDescription(<código-de-error-no-válido>) debe retornar la descripción correcta', () => {
    const errorCode = 'invalid code'
    const expectedDesc = 'unknown / not docummented'
    const desc = getErrorDescription(errorCode)
    expect(desc).toBe(expectedDesc)
  })

})