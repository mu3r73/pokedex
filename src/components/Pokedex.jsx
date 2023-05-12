import { useEffect, useState } from 'react'
import { Box, Card, CardBody, Heading, Spinner, useToast } from '@chakra-ui/react'

import SpriteCard from './SpriteCard'
import SearchBox from './SearchBox'
import Details from './Details'
import Description from './Description'

import useFetchPokemon from '../hooks/useFetchPokemon'
import getRandomPokemonNumber from '../helpers/getRandomPokemonNumber'

const Pokedex = () => {
  const [ search, setSearch ] = useState('')
  const { pokemon, error, isLoading } = useFetchPokemon(search)

  const onSearch = (newSearchStr) => {
    if (!isLoading) {
      setSearch(newSearchStr)
    }
  }

  const onXLCircleClick = () => {
    onSearch(getRandomPokemonNumber().toString())
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
    <Card>
        <CardBody>
          <div className="main-title">
            <div className="title-wrapper">
              <div className="xl-circle"
                onClick={ onXLCircleClick }
              />
              <Heading as="h3" className="main-title-text">pokédex</Heading>
            </div>
          </div>
          <div className="main-body">
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
          </div>
        </CardBody>
      </Card>
  )
}

export default Pokedex