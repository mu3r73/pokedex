const ERROR_DESCRIPTIONS = {
  200: 'ok',
  400: 'bad request',
  402: 'request failed',
  403: 'forbidden',
  404: 'not found',
  429: 'too many requests',
  500: 'server error',
  502: 'server error',
  503: 'server error',
  504: 'server error',
}
// source: https://docs.pokemontcg.io/getting-started/errors/

const DEFAULT_ERROR_DESC = 'unknown / not docummented'

const getErrorDescription = (code) => {
  return ERROR_DESCRIPTIONS[code] || DEFAULT_ERROR_DESC
}

export default getErrorDescription