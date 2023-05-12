import { useEffect, useState } from 'react'
import { Box, Card, CardBody, Spinner, useToast } from '@chakra-ui/react'

import SpriteCard from './SpriteCard'
import SearchBox from './SearchBox'
import Details from './Details'
import Description from './Description'

import useFetchPokemon from '../hooks/useFetchPokemon'

const Pokedex = () => {
  const [ search, setSearch ] = useState('')
  const { pokemon, error, isLoading } = useFetchPokemon(search)

  const onSearch = (newSearchStr) => {
    setSearch(newSearchStr)
  }
  
  const toast = useToast()

  useEffect(() => {
    if (error?.length) {
      toast({
        status: 'error',
        description: error,
      })
    }
  }, [error])


  return (
    <Box className="h-center">
      <Box className="h-center">
        <CardBody>
          <SpriteCard pokemon={ pokemon } />
          <SearchBox onNewSearch={ onSearch } />
        </CardBody>
      </Box>
      <Box className="column" ml={2}>
        <CardBody>
          <Details pokemon={ pokemon } />
          <Description pokemon={ pokemon } />
          <Box mt={4}>
            { isLoading && <Spinner size="xl" thickness=".2rem" color="blue.500" emptyColor="gray.500" /> }
          </Box>
        </CardBody>
      </Box>
    </Box>
  )
}

export default Pokedex