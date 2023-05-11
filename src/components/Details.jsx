import { Box, Text } from "@chakra-ui/react"

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

const hg2kg = (weight) => {
  return weight * 0.1
}

const dm2m = (height) => {
  return height * 0.1
}

const roundToOneDecimalDigit = (num) => {
  return (Math.round(num) * 10) / 10
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
  if (!pokemon) {
    return ARBOK
  }
  // pokemon no es undefined / null
  return pokemon
}

export default Details