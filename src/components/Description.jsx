import { Box, IconButton, Text } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import ARBOK from "../data/arbok"

const Description = (props) => {
  const { pokemon } = props
  const { description } = pokemon || ARBOK
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const onBackClicked = () => {
    setCurrentIndex(modulo(currentIndex - 1, description.length))
  }

  const onForwardClicked = () => {
    setCurrentIndex(modulo(currentIndex + 1, description.length))
  }

  const getDescription = () => {
    return description ? description[currentIndex] : null
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [description])

  return (
    <Box className="column description-card">
      <Box className="description-text">
        <Text as="p" fontSize="xs" >
          { getDescription() }
        </Text>
      </Box>
      {
        description &&
        <Box className="description-btns">
          <IconButton
            icon={ <ArrowBackIcon /> }
            onClick={ onBackClicked }
          />
          <IconButton
            icon={ <ArrowForwardIcon /> }
            onClick={ onForwardClicked }
          />
        </Box>
      }
    </Box>
  )
}

const modulo = (num, max) => {
  return ((num % max) + max) % max
}

export default Description