import { Box, Container, Grid, GridItem, Heading, Text, Image, Flex } from "@chakra-ui/react"
import DeliveryImg from '../images/ChooseUs/delivery.jpg'
import Delivery from '../images/ChooseUs/delivery.png'
import Quality from '../images/ChooseUs/quality.png'
import Prices from '../images/ChooseUs/prices.png'
import Payment from '../images/ChooseUs/payment.png'

const ChooseUs = () => {
    return (
        <Box pt="200px" pb='200px'>

            <Container maxW="container.xl">

                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <GridItem
                        w='100%'
                        colSpan={{ base: 2, sm: 2, md: 2, lg: 1 }}
                        >
                        <Heading>Why Shop With Us?</Heading>
                        <Text pt={7}>Discover the difference at Urbanique. Here's why we stand out:</Text>

                        <Box pt={7}>
                            <Grid templateColumns="repeat(4, 1fr)" gap={5}>

                                <GridItem
                                    colSpan={{ base: 4, sm: 4, md: 2, lg: 2 }}>
                                    <Flex gap={4}>

                                        <Image src={Quality} alt="Quality" h='50px' />

                                        <Box>
                                            <Heading fontSize='xl'>Superior Quality</Heading>
                                            <Text as='p' pt={5}>We source our products from trusted suppliers to guarantee top-notch quality.</Text>
                                        </Box>

                                    </Flex>

                                </GridItem>

                                <GridItem colSpan={{ base: 4, sm: 4, md: 2, lg: 2 }}>
                                    <Flex gap={4}>

                                        <Image src={Delivery} alt="Delivery" h='50px' />

                                        <Box>
                                            <Heading fontSize='xl'>Fast Delivery</Heading>
                                            <Text as='p' pt={5}>Experience swift and reliable delivery services.</Text>
                                        </Box>

                                    </Flex>
                                </GridItem>

                                <GridItem colSpan={{ base: 4, sm: 4, md: 2, lg: 2 }}>
                                    <Flex gap={4}>

                                        <Image src={Prices} alt="Prices" h='50px' />

                                        <Box>
                                            <Heading fontSize='xl'>Best Prices</Heading>
                                            <Text as='p' pt={5}>Enjoy unbeatable prices on a wide range of products.</Text>
                                        </Box>

                                    </Flex>
                                </GridItem >

                                <GridItem colSpan={{ base: 4, sm: 4, md: 2, lg: 2 }}>
                                    <Flex gap={4}>

                                        <Image src={Payment} alt="Payment" h='50px' />

                                        <Box>
                                            <Heading fontSize='xl'>Secure Payment</Heading>
                                            <Text as='p' pt={5}>Our encrypted payment gateway ensures that your transactions are safe and secure</Text>
                                        </Box>

                                    </Flex>
                                </GridItem>

                            </Grid>
                        </Box>
                    </GridItem>

                    <GridItem
                        w='100%'
                        colSpan={{ base: 2, sm: 2, md: 2, lg: 1 }}
                        backgroundImage={DeliveryImg}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize={800}>
                        <Box w='50%' pt='15%' pb='15%' pl='10%'>
                            <Text as='p'>FREE DELIVERY !</Text>
                            <Heading as='h2' py={5}>For all orders over $100</Heading>
                            <Text as='p'>When you sign up for an account</Text>
                        </Box>
                    </GridItem>
                </Grid>

            </Container>

        </Box>
    )
}

export default ChooseUs