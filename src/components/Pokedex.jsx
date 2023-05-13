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
    <Card className="pokedex-card">
      <CardBody>
        {/* header */}
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
            {/* panel izquierdo */}
            <Box className="h-center">
              <CardBody>
                <SpriteCard pokemon={ pokemon } />
                <SearchBox
                  isLoading={ isLoading }
                  onNewSearch={ onSearch }
                />
              </CardBody>
            </Box>
            {/* panel derecho */}
            <Box className="column" ml={2}>
              <CardBody>
                <Details pokemon={ pokemon } />
                <Description pokemon={ pokemon } />
              </CardBody>
            </Box>
          </Box>
        </div>
      </CardBody>
    </Card>
  )
}

export default Pokedex