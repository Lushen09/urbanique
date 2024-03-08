import { Box, Button, Container, Heading, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg="blackAlpha.400" color="black">
            <Container maxW="container.xl" py={8}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} textAlign={{ base: 'center', sm: 'start' }}>

                    <VStack spacing={4}>
                        <Heading size="md">Urbanique</Heading>
                        <Text>123 Street Name, City, Country</Text>
                        <Text>Phone: +1234567890</Text>
                    </VStack>


                    <VStack spacing={4}>
                        <Heading size="md">Navigation</Heading>
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Products</Link>
                        <Link href="#">Account</Link>
                    </VStack>


                    <VStack spacing={4}>
                        <Heading size="md">Information</Heading>
                        <Link href="#">Terms & Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Delivery Information</Link>
                    </VStack>


                    <VStack spacing={4}>
                        <Heading size="md">Newsletter Signup</Heading>
                        <Text>Subscribe to our newsletter for updates</Text>
                        <Input placeholder='Email' size='sm' />
                        <Button colorScheme="teal" size="sm">Subscribe</Button>
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Footer;
