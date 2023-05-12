import { useEffect, useState } from 'react'

import getPokemon from '../helpers/getPokemon'
import getSpeciesData from '../helpers/getSpeciesData'
import getType from '../helpers/getType'

const useFetchPokemon = (searchStr) => {
  const [ pokemon, setPokemon ] = useState(undefined)
  const [ error, setError ] = useState(undefined)
  const [ isLoading, setIsLoading ] = useState(false)

  const getData = async () => {
    if (!searchStr.length) {
      return
    }
    setIsLoading(true)
    try {
      const newPokemon = await getPokemon(searchStr)
      const { descs, genus } = await getSpeciesData(newPokemon.descriptionUrl)
      newPokemon.description = descs
      newPokemon.genus = genus
      newPokemon.types = await Promise.all(
        newPokemon.typesUrls.map(async (url) => {
          const t = await getType(url)
          return t
        })
      )
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