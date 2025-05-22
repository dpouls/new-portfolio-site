import { Box, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'preact/hooks'
import { ThemeContext } from '../App'

const Footer = () => {
  const { colors } = useContext(ThemeContext)
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      as="footer" 
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={6}
    >
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text color={colors.text}>
            © {new Date().getFullYear()} Dallin Poulson. All rights reserved.
          </Text>
          
          <Flex gap={6}>
            <Link 
              href="https://github.com/dpouls" 
              isExternal
              color={colors.primary}
              _hover={{ color: colors.secondary }}
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/dallin-poulson" 
              isExternal
              color={colors.primary}
              _hover={{ color: colors.secondary }}
            >
              LinkedIn
            </Link>
            <Link 
              href="/contact"
              color={colors.primary}
              _hover={{ color: colors.secondary }}
            >
              Contact
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer 