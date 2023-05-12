import { Box, Heading, Image } from '@chakra-ui/react'
import { useState } from 'react'

const SpriteCard = (props) => {
  const { pokemon } = props
  const { id, name, spriteUrl, shinySpriteUrl } = getData(pokemon)
  const [ isShiny, setIsShiny ] = useState(false)

  const onBigCircleClick = () => {
    setIsShiny(!isShiny)
  }
  
  return (
    <Box className="sprite-card" >
      <Box className="h-center" >
        <div className="small-circle crimson-background" />
        <div className="small-circle crimson-background" />
      </Box>
      <Box className="h-center sprite-box">
        <Image className="sprite"
         src={ isShiny ? shinySpriteUrl : spriteUrl }
        />
      </Box>
      <Box className="sprite-footer">
        <div className={`big-circle ${ isShiny ? "shiny-background" : "crimson-background" }`}
          onClick={ onBigCircleClick }
        />
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
  shinySpriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/24.png',
}

const getData = (pokemon) => {
  return pokemon ? pokemon : ARBOK
}

export default SpriteCard