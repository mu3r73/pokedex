import { useState } from 'react'
import { Box, Button, Input, InputGroup, Spinner } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBox = (props) => {
  const { isLoading, onNewSearch } = props
  const [ search, setSearch ] = useState('')

  const onInputChange = (event) => {
    const { target } = event
    setSearch(target.value.trim().toLowerCase())
  }

  const onInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (search.length) {
        onNewSearch(search)
        setSearch('')
      }
    }
  }

  const onSearchClicked = () => {
    if (search.length) {
      onNewSearch(search)
      setSearch('')
    }
  }

  return (
    <Box mt={6} className="column h-center">
      <Box>
        <form onSubmit={ onSearchClicked }>
          <InputGroup>
            <Input
              className="search-input"
              type="text"
              placeholder="escribí un nombre o número de pokémon"
              value={ search }
              onChange={ onInputChange }
              onKeyPress={ onInputKeyPress }
            />

            <Button
              className="search-btn"
              disabled={ isLoading } 
              onClick={ onSearchClicked }
            >
              {
                isLoading
                ? (
                    <Spinner
                      size="sm"
                      color="blue.500"
                      emptyColor="gray.500"
                      thickness=".2rem"
                    />
                  )
                : (
                    <SearchIcon />
                  )
              }
            </Button>
          </InputGroup>
        </form>
      </Box>
    </Box>
  )
}

export default SearchBox