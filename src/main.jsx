import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'

import App from './components/App'

import './styles.css'

const toastOptions = {
  position: 'top-right',
  duration: 6000,
  isClosable: true,
}

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider
      theme={ theme }
      toastOptions={{ defaultOptions: toastOptions }}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
