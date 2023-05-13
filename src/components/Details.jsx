import { useEffect, useState } from 'react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import { hg2kg, dm2m } from '../utils/units'
import ARBOK from '../data/arbok'

const Details = (props) => {
  const { pokemon } = props
  const { id, name, nameJp, types, genus, height, weight } = pokemon || ARBOK
  const [ showNameJp, setShowNameJp ] = useState(false)

  const onNameClick = () => {
    setShowNameJp(!showNameJp)
  }

  useEffect(() => {
    setShowNameJp(false)
  }, [pokemon])

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
        <Text as="p" fontSize="sm"
          onClick={ onNameClick }
        >
          { showNameJp ? nameJp : name }
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

export default Details