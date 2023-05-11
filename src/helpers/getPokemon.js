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
      types: data.types?.map((t) => t.type?.name),
      height: data.height,
      weight: data.weight,
      officialArtworkFrontUrl: sprites?.front_default,
      officialArtworkShinyUrl: sprites?.front_shiny,
    }
    pokemon.isShiny = (!!pokemon.officialArtworkShinyUrl?.length) && (Math.random() > 0.9)
    return pokemon
  }
  
  export default getPokemon