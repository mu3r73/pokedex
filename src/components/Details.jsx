import { Box, SimpleGrid, Text } from "@chakra-ui/react"

import { hg2kg, dm2m } from '../utils/units'

const Details = (props) => {
  const { pokemon } = props
  const { id, name, types, genus, height, weight } = getData(pokemon)
  
  return (
    <Box className="details-card" color="white">
      <SimpleGrid columns={2}>
        <Text as="p" fontSize="sm">
          número:
        </Text>
        <Text as="p" fontSize="sm">
          { id }
        </Text>
        <Text as="p" fontSize="sm">
          nombre:
        </Text>
        <Text as="p" fontSize="sm">
          { name }
        </Text>
        <Text as="p" fontSize="sm">
          tipo{ types.length > 1 ? 's' : '' }:
        </Text>
        <Text as="p" fontSize="sm">
          { types.join(', ') }
        </Text>
        <Text as="p" fontSize="sm">
          género:
        </Text>
        <Text as="p" fontSize="sm">
          { genus || '-' }
        </Text>
        <Text as="p" fontSize="sm">
          peso:
        </Text>
        <Text as="p" fontSize="sm">
          { hg2kg(weight).toFixed(1) } kg
        </Text>
        <Text as="p" fontSize="sm">
          altura:
        </Text>
        <Text as="p" fontSize="sm">
          { dm2m(height).toFixed(1) } m
        </Text>
      </SimpleGrid>
    </Box>
  )
}

const ARBOK = {
  id: 24,
  name: 'arbok',
  types: ['veneno'],
  genus: 'pokémon cobra',
  height: 35,
  weight: 650,
}

const getData = (pokemon) => {
  return pokemon ? pokemon : ARBOK
}

export default Details