import { useEffect, useState } from 'react'
import { Box, Card, CardBody, Spinner, useToast } from '@chakra-ui/react'

import SpriteCard from './SpriteCard'
import SearchBox from './SearchBox'

import { useFetchPokemon } from '../hooks/useFetchPokemon'
import Details from './Details'

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
        <Card>
          <CardBody>
            <SpriteCard pokemon={ pokemon } />
            <SearchBox onNewSearch={ onSearch } />
          </CardBody>
        </Card>
      </Box>
      <Box className="column" ml={2}>
        <Card>
          <CardBody>
            <Details pokemon={ pokemon } />
            <Box mt={4}>
              { isLoading && <Spinner size="xl" thickness=".2rem" color="blue.500" emptyColor="gray.500" /> }
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  )
}

export default Pokedex