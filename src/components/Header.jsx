import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'preact/hooks'
import { ThemeContext } from '../App'

const Header = () => {
  const { colors } = useContext(ThemeContext)
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      as="header" 
      position="sticky" 
      top={0} 
      zIndex={10} 
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      shadow="sm"
    >
      <Flex 
        maxW="container.xl" 
        mx="auto" 
        px={4} 
        h={16} 
        alignItems="center" 
        justifyContent="space-between"
      >
        <Box 
          as="a" 
          href="/" 
          fontWeight="bold" 
          fontSize="xl" 
          color={colors.primary}
          _hover={{ textDecoration: 'none', color: colors.secondary }}
        >
          Dallin Poulson
        </Box>

        <Flex gap={4}>
          <Button 
            as="a" 
            href="/" 
            variant="ghost" 
            colorScheme="blue"
          >
            Home
          </Button>
          <Button 
            as="a" 
            href="/projects" 
            variant="ghost" 
            colorScheme="blue"
          >
            Projects
          </Button>
          <Button 
            as="a" 
            href="/contact" 
            variant="ghost" 
            colorScheme="blue"
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header 