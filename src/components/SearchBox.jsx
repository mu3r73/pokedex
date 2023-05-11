import { useState } from 'react'
import { Box, IconButton, Input, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBox = (props) => {
  const { onNewSearch } = props
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
              type="text"
              placeholder="escribí un nombre o número de pokémon"
              value={ search }
              onChange={ onInputChange }
              onKeyPress={ onInputKeyPress }
            />
            <IconButton
              icon={ <SearchIcon /> }
              disabled={ !search.length }
              onClick={ onSearchClicked }
            />
          </InputGroup>
        </form>
      </Box>
    </Box>
  )
}

export default SearchBox