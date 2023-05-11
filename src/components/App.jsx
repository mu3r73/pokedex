import { Box, Card, CardBody, Heading } from '@chakra-ui/react'
import Pokedex from './Pokedex'

const App = () => {

  return (
    <Box margin={2}>
      <Card>
        <CardBody>
          <Heading as="h3" mb={3}>pokédex</Heading>
          <Pokedex />
        </CardBody>
      </Card>
    </Box>
  )
}

export default App
