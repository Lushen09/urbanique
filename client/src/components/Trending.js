import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"

const Trending = () => {

    const [products, setProducts] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }

    const handleClickPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % products.length);
    }


    useEffect(() => {
        const fetchProducts = async () => {
            const response1 = await fetch('http://localhost:3005/api/products/category/jewelery');
            const response2 = await fetch(`http://localhost:3005/api/products/category/men's clothing`);
            const json1 = await response1.json();
            const json2 = await response2.json();
            const json = [...json1, ...json2];

            if (response1.ok && response2.ok) {
                setProducts(json);
            }
        }

        fetchProducts()
    }, []);

    return (

        <Box pt='200px'>

            <Container maxW='container.lg'>

                <Flex justifyContent='space-between'
                    alignItems={{ base: 'center', sm: 'flex-end' }}
                    flexDirection={{ base: 'column', sm: 'row' }}>
                    <VStack>
                        <Heading>Trending Products</Heading>
                        <Text pt={5}>Some of our most trending products right now</Text>
                    </VStack>

                    <Box
                        pt={{ base: 5, md: 0 }} >
                        <ArrowLeftIcon mr={5} variant="solid" colorScheme='blackAlpha' size='lg' onClick={handleClickPrev} />
                        <ArrowRightIcon variant="solid" colorScheme='blackAlpha' size='lg' onClick={handleClickNext} />
                    </Box>
                </Flex>


                <Box pt={20}>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                        {products && products.map((product, index) => (
                            <GridItem key={index} textAlign='center' p={5} bg="white" colSpan={{ base: 2, md: 2, lg: 1 }} display={(index >= currentIndex && index < currentIndex + 4) ? 'block' : 'none'}>
                                <Flex flexDirection="column" justifyContent="space-between" height="100%">
                                    <Image src={product.image} alt={product.title} h={100} mx="auto" />
                                    <Box>
                                        <Heading size="md" mt="20%">{product.title}</Heading>
                                        <Text mt="auto">${product.price}</Text>
                                    </Box>
                                </Flex>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </Box>

    )
}

export default Trending