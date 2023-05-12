import { Box, Text } from "@chakra-ui/react"

import { hg2kg, dm2m } from '../utils/units'
import { roundToOneDecimalDigit } from '../utils/numbers'

const Details = (props) => {
  const { pokemon } = props
  const { id, name, types, genus, height, weight, isShiny } = getData(pokemon)
  
  return (
    <Box className="details-card">
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
        Género: { genus }
      </Text>
      <Text as="p" fontSize="sm">
        Peso: { roundToOneDecimalDigit(hg2kg(weight)) } kg
      </Text>
      <Text as="p" fontSize="sm">
        Altura: { roundToOneDecimalDigit(dm2m(height)) } m
      </Text>
      {
        isShiny && (
          <Text as="p" fontSize="sm">
            ¡Es shiny!
          </Text>
        )
      }
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
  isShiny: false,
}

const getData = (pokemon) => {
  return pokemon ? pokemon : ARBOK
}

export default Details