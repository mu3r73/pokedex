import getErrorDescription from '../utils/httpErrors'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const getPokemon = async (searchStr) => {
  const url = `${BASE_URL}/${searchStr}/`
  const res = await fetch(url)
  if (res.status !== 200) {
    const errorDesc = getErrorDescription(res.status)
    throw new Error(`${res.status} - ${errorDesc}`)
  }
  const data = await res.json()
  const sprites = data.sprites.other && data.sprites.other['official-artwork']
  const pokemon = {
    id: data.id,
    name: data.name,
    descriptionUrl: data.species.url,
    typesUrls: data.types?.map((t) => t.type?.url),
    height: data.height,
    weight: data.weight,
    spriteUrl: sprites?.front_default,
    shinySpriteUrl: sprites?.front_shiny,
  }
  return pokemon
}
  
export default getPokemon