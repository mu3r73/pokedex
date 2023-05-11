import { useEffect, useState } from 'react'

import getPokemon from '../helpers/getPokemon'

const useFetchPokemon = (searchStr) => {
  const [pokemon, setPokemon] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    if (!searchStr.length) {
      return
    }
    setIsLoading(true)
    try {
      const newPokemon = await getPokemon(searchStr)
      setPokemon(newPokemon)
      setError(undefined)
    } catch (newError) {
      setError(`Error al buscar '${searchStr}': ${newError.message}`)
      setPokemon(undefined)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [searchStr])

  return {
    pokemon,
    error,
    isLoading,
  }
}

export default useFetchPokemon