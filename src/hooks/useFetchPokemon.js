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
      const speciesData = await getSpeciesData(newPokemon.descriptionUrl)
      const { descs, genus } = speciesData
      newPokemon.nameJp = speciesData.nameJp
      newPokemon.description = descs?.length > 0 ? descs : [ speciesData.nameJp ]
      newPokemon.genus = genus
      const types = await Promise.all(
        newPokemon.typesUrls.map(async (url) => {
          const t = await getType(url)
          return t
        })
      )
      newPokemon.types = types.map(t => t.name)
      newPokemon.typesEn = types.map(t => t.nameEn)
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