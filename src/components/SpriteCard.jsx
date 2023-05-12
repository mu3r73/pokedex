import { useState } from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

const SpriteCard = (props) => {
  const { pokemon } = props
  if (!pokemon) {
    return null
  }
  const { id, name, typesEn, spriteUrl, shinySpriteUrl } = pokemon
  const [ isShiny, setIsShiny ] = useState(false)

  const onBigCircleClick = () => {
    setIsShiny(!isShiny)
  }

  return (
    <Box className="sprite-card" >
      <Box className="h-center" >
        { 
          typesEn?.map(te => (
            <div key={ te } className={ `small-circle ${te}-type-background` } />
          ))
        }
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

export default SpriteCard