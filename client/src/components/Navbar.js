import React, { useRef } from 'react';
import { Box, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Link, Spacer, VStack, useDisclosure } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useUserContext } from '../hooks/useUserContext';

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const { user } = useUserContext(); // getting user from context

  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  }

  return (

    <Box>

      <Container maxW='container.xl'>
        <Flex as="nav" p="10px" alignItems="center">

          {/* Large screen Navbar */}
          <HStack spacing="20px">
            <Heading as="h2">Urbanique</Heading>
            <Box display={{ base: "none", md: "block" }}>
              <Link as={ReactRouterLink} pl="20px" to='/'>Home</Link>
              <Link as={ReactRouterLink} pl="20px" to='/shop'>Shop</Link>
              <Link as={ReactRouterLink} pl="20px" to='/contact'>Contact</Link>
            </Box>
          </HStack>
          <Spacer />


          <Spacer />

          <HStack spacing="20px">

            {/* If user is not logged in, display log in link */}
            <Box display={{ base: "none", md: "block" }}>

              {user ?
                <HStack>
                  <Link as={ReactRouterLink} to='/cart'><ion-icon name="cart-outline" size="large"></ion-icon></Link>
                  <Link as={ReactRouterLink} pl="10px" onClick={handleLogout}>Log out</Link>
                </HStack>

                :
                <Box>
                  <Link as={ReactRouterLink} pl="10px" to='/user'>Log in</Link>

                </Box>
              }
            </Box>

            <Box display={{ base: 'block', md: 'none' }} onClick={onOpen} ref={btnRef}>
              <ion-icon name="menu-outline" size="large"></ion-icon>
            </Box>

          </HStack>

        </Flex>
      </Container>

      {/* Mobile Navbar */}

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader as='h1'>Urbanique</DrawerHeader>

          <DrawerBody>
            <VStack alignItems='flex-start' pl="10px">
              <Link as={ReactRouterLink} to='/'>Home</Link>
              <Link as={ReactRouterLink} to='/shop'>Shop</Link>
              <Link as={ReactRouterLink} to='/contact'>Contact</Link>
            </VStack>

            {/* If user is not logged in, display log in link */}
            <Box pt='30px'>

              {user ?
                <VStack alignItems='flex-start' pl="10px">
                  <Link as={ReactRouterLink} onClick={handleLogout}>Log out</Link>
                  <Link as={ReactRouterLink} to='/cart'><ion-icon name="cart-outline" size="large"></ion-icon></Link>
                </VStack>

                :
                <VStack alignItems='flex-start' pl="10px">
                  <Link as={ReactRouterLink} pl="10px" to='/user'>Log in</Link>
                </VStack>
              }
            </Box>


          </DrawerBody>
        </DrawerContent>



      </Drawer>

    </Box>

  )
}

export default Navbar