const MAX_POKEMON_NUMBER = 1010

const getRandomPokemonNumber = () => {
  return Math.floor(Math.random() * (MAX_POKEMON_NUMBER - 1) + 1)
}

export default getRandomPokemonNumber