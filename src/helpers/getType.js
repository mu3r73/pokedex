import getErrorDescription from '../utils/httpErrors'

const LANG_ES = 'es'

const getType = async (url) => {
  const res = await fetch(url)
  if (res.status !== 200) {
    const errorDesc = getErrorDescription(res.status)
    throw new Error(`${res.status} - ${errorDesc}`)
  }
  const data = await res.json()
  
  const name = data.names.find(name => name.language.name === LANG_ES)
  return name.name.toLowerCase()
}

export default getType