import { Box, Text } from "@chakra-ui/react"

import { hg2kg, dm2m } from '../utils/units'
import { roundToOneDecimalDigit } from '../utils/numbers'

const Details = (props) => {
  const { pokemon } = props
  const { id, name, types, height, weight, isShiny } = getData(pokemon)
  
  return (
    <Box className="details-card">
      <Text as="p">
        Número: { id }
      </Text>
      <Text as="p">
        Nombre: { name }
      </Text>
      <Text as="p">
        Tipos: { types.join(', ') }
      </Text>
      <Text as="p">
        Peso: { roundToOneDecimalDigit(hg2kg(weight)) } kg
      </Text>
      <Text as="p">
        Altura: { roundToOneDecimalDigit(dm2m(height)) } m
      </Text>
      {
        isShiny && (
          <Text as="p">
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
  types: ['poison'],
  height: 35,
  weight: 650,
  isShiny: false,
}

const getData = (pokemon) => {
  return pokemon ? pokemon : ARBOK
}

export default Details