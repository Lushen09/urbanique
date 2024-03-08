import { Box, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import HeroImg from '../images/Hero/hero.jpg'


const Hero = () => {
  return (

    <Box>

      <Container maxW='container.xl' pt="100px">
        <Grid templateColumns="repeat(2, 1fr)" gap={100} alignItems='center'>
          <GridItem
            w='100%'
            order={[2, 2, 1, 1]}
            colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}>
            <Box >
              <Text as='p'>COMING SOON!</Text>
              <Heading as='h1' pt='20px' pb='20px'>Our Mega Summer Collection</Heading>
              <Text as='p'>Get ready for the summer with our new collection of clothes, shoes, and accessories. We have everything you need to look your best this summer.</Text>
            </Box>
          </GridItem>

          <GridItem
            w='100%'
            order={[1, 1, 2,]}
            colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
            border='2px' borderColor='gray.200'>
            <Box  >
              <Image src={HeroImg} alt='Clothes collection' w='100%'  />
            </Box>
          </GridItem>
        </Grid>
      </Container>


    </Box>
  )
}

export default Hero