import getErrorDescription from '../utils/httpErrors'

const LANG_ES = 'es'
const LANG_JA = 'ja'

const getSpeciesData = async (speciesUrl) => {
  const res = await fetch(speciesUrl)
  if (res.status !== 200) {
    const errorDesc = getErrorDescription(res.status)
    throw new Error(`${res.status} - ${errorDesc}`)
  }
  const data = await res.json()
  
  const descs = []
  data.flavor_text_entries
    .filter(ft => ft.language.name === LANG_ES)
    .map(ft => ft.flavor_text.replaceAll('\n', ' '))
    .forEach(ft => {
      if (!descs.includes(ft)) {
        descs.push(ft)
      }
    })
  
  const genus = data.genera.find(g => g.language.name === LANG_ES)
  const nameJp = data.names.find(n => n.language.name === LANG_JA)
  
  return {
    descs,
    genus: genus?.genus.toLowerCase(),
    nameJp: nameJp.name,
  }
}

export default getSpeciesData