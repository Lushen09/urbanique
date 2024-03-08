import { Box, Container, Heading, Text, Grid, GridItem, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (

        <Box bg="gray.100">

            <Navbar />

            <Box py="150" >

                <Container maxW="container.lg">
                    <VStack spacing="8" textAlign="center">
                        <Heading as="h1" size="xl">Contact Us</Heading>
                        <Text fontSize="lg">
                            We'd love to hear from you! Feel free to reach out to us using the information below or by filling out the contact form.
                        </Text>
                    </VStack>
                    <Grid templateColumns="repeat(3, 1fr)" gap="8" mt="12" pt='50px'>
                        <GridItem>
                            <VStack spacing="4">
                                <Heading as="h3" size="md">Address</Heading>
                                <Text>123 Main Street</Text>
                                <Text>City, State ZIP</Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack spacing="4">
                                <Heading as="h3" size="md">Contact Number</Heading>
                                <Text>(123) 456-7890</Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <VStack spacing="4">
                                <Heading as="h3" size="md">Email Address</Heading>
                                <Text>info@example.com</Text>
                            </VStack>
                        </GridItem>
                    </Grid>
                    <Box mt="12">
                        <Heading as="h2" size="lg" textAlign="center" mb="6">Send us a Message</Heading>
                        <VStack spacing="4" maxW="lg" mx="auto">
                            <Input placeholder="Full Name" />
                            <Input type="email" placeholder="Email Address" />
                            <Input type="tel" placeholder="Phone Number" />
                            <Input placeholder="Subject" />
                            <Textarea placeholder="Message" rows="5" />
                            <Button colorScheme="blue">Send</Button>
                        </VStack>
                    </Box>
                </Container>

            </Box>

            <Footer />
        </Box>

    );
}

export default Contact;
