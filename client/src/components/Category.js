import { Box, Container, Grid, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import Men from '../images/Categories/men.png'
import Women from '../images/Categories/women.png'
import Jewelry from '../images/Categories/jewelry.png'
import Electronics from '../images/Categories/electronics.png'



const Category = () => {
    return (
        <Box pt='200px' >

            <Container maxW='container.lg'>

                <Heading textAlign='center'>Huge Selection of Products</Heading>

                <Text textAlign='center' pt={7}>Some of our best featured products</Text>

                <Grid templateColumns="repeat(4, 1fr)" justifyItems="center" gap={6} pt={10}>

                    <GridItem bg="blackAlpha.300" textAlign='center' boxShadow='lg' colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}>

                        <Link as={RouterLink} to="/shop?category=men's clothes">
                            <Box p={5} >
                                <Image src={Men} height={100} />
                                <Text pt={3}>Men</Text>
                            </Box>
                        </Link>

                    </GridItem>

                    <GridItem bg="blackAlpha.300" textAlign='center' boxShadow='lg' colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}>
                        <Link as={RouterLink} to="/shop?category=women's clothes">
                            <Box p={5}>
                                <Image src={Women} height={100} />
                                <Text pt={3}>Women</Text>
                            </Box>
                        </Link>
                    </GridItem>

                    <GridItem bg="blackAlpha.300" textAlign='center' boxShadow='lg' colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}>
                        <Link as={RouterLink} to="/shop?category=jewelery">
                            <Box p={5}>
                                <Image src={Jewelry} height={100} />
                                <Text pt={3}>Jewelry</Text>
                            </Box>
                        </Link>
                    </GridItem>

                    <GridItem bg="blackAlpha.300" textAlign='center' boxShadow='lg' colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}>
                        <Link as={RouterLink} to="/shop?category=electronics">
                            <Box p={5}>
                                <Image src={Electronics} height={100} />
                                <Text pt={3}>Electronics</Text>
                            </Box>
                        </Link>
                    </GridItem>
                </Grid>

            </Container>


        </Box>
    )
}

export default Category