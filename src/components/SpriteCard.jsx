import { Box, Heading, Image } from '@chakra-ui/react'

const SpriteCard = (props) => {
  const { pokemon } = props
  const { id, name, spriteUrl } = getData(pokemon)
  
  return (
    <Box className="sprite-card" >
      <Box className="h-center" >
        <div className="small-circle" />
        <div className="small-circle" />
      </Box>
      <Box className="h-center sprite-box">
        <Image className="sprite"
         src={ spriteUrl }
        />
      </Box>
      <Box className="sprite-footer">
        <div className="big-circle" />
        <Box className="sprite-caption">
          <Heading as="h4" size="md" color="black">
            { id }.&nbsp;
          </Heading>
          <Heading as="h4" size="md" color="black">
            { name }
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

const ARBOK = {
  id: 24,
  name: 'arbok',
  spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
}

const getData = (pokemon) => {
  if (!pokemon) {
    return ARBOK
  }
  // pokemon no es undefined / null
  return {
    ... pokemon,
    spriteUrl: pokemon.isShiny ? pokemon.officialArtworkShinyUrl : pokemon.officialArtworkFrontUrl,
  }
}

export default SpriteCard