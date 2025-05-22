import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'
import Header from './components/Header'
import Footer from './components/Footer'
import { Router, Route } from 'preact-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

// Create a theme context for custom colors
export const ThemeContext = createContext({
  colors: {
    primary: '#2B6CB0',
    secondary: '#4299E1',
    accent: '#63B3ED',
    background: '#F7FAFC',
    text: '#2D3748'
  }
})

function App() {
  const theme = useContext(ThemeContext)

  return (
    <ChakraProvider>
      <ThemeContext.Provider value={theme}>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Header />
          <Container maxW="container.xl" flex="1" py={8}>
            <Router>
              <Home path="/" />
              <Projects path="/projects" />
              <Contact path="/contact" />
            </Router>
          </Container>
          <Footer />
        </Box>
      </ThemeContext.Provider>
    </ChakraProvider>
  )
}

export default App 