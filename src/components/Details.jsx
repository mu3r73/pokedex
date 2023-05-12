import { Box, Text } from "@chakra-ui/react"

import { hg2kg, dm2m } from '../utils/units'

const Details = (props) => {
  const { pokemon } = props
  if (!pokemon) {
    return null
  }
  const { id, name, types, genus, height, weight } = pokemon
  
  return (
    <Box className="details-card" color="white">
      <Text as="p" fontSize="sm">
        Número: { id }
      </Text>
      <Text as="p" fontSize="sm">
        Nombre: { name }
      </Text>
      <Text as="p" fontSize="sm">
        Tipo{ types.length > 1 ? 's' : '' }: { types.join(', ') }
      </Text>
      <Text as="p" fontSize="sm">
        Género: { genus || '-' }
      </Text>
      <Text as="p" fontSize="sm">
        Peso: { hg2kg(weight).toFixed(1) } kg
      </Text>
      <Text as="p" fontSize="sm">
        Altura: { dm2m(height).toFixed(1) } m
      </Text>
    </Box>
  )
}

export default Details