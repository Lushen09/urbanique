import { Box, Grid, GridItem, Heading, Text, Button } from "@chakra-ui/react"
import Jewelry from '../images/NewCollection/jewelry.jpg'
import Women from '../images/NewCollection/women.jpg'


const NewCollection = () => {
    return (
        <Box pt="200px">

            <Grid templateColumns="repeat(2, 1fr)" >
                <GridItem
                    w='100%'
                    colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                    backgroundImage={Jewelry}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize={{base: 700, xl: 1000}}>
                    <Box pt='15%' pb='15%' pl='25px' w='53%' color="teal.500">
                        <Text as='p'>NEW COLLECTION</Text>
                        <Heading as='h2' py={5}>Jewelry & Accessories</Heading>
                        <Text as='p' pb={5}>Browse our latest jewelry collection</Text>
                        <Button colorScheme="teal" variant="solid" size="lg">Shop Now</Button>
                    </Box>
                </GridItem>

                <GridItem
                    w='100%'
                    colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                    backgroundImage={Women}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize={{base: 700, xl: 1000}}>
                    <Box w='50%' mx='auto' textAlign='center' pt='15%' pb='15%' color='0.600'>
                        <Text as='p'>UP TO 25% OFF !</Text>
                        <Heading as='h2' py={5}>Women's Collection</Heading>
                        <Text as='p'>When you sign up for an account</Text>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    )
}

export default NewCollection