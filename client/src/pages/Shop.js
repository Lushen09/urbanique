import { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Button, Card, CardBody, CardFooter, Container, Divider, Grid, GridItem, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Spinner, Stack, Text } from "@chakra-ui/react";
import Shopping from "../images/Shop/shopping.jpg";
import ViewProduct from "./ViewProduct";
import { useCart } from "../context/CartContext";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { addToCart } = useCart();

    // useEffect hook fetches products on render
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3005/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                setProducts(json);
                setFilteredProducts(json);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    // filter products by category
    const handleFilter = (e) => {
        const category = e.target.getAttribute('data-category');
        const filteredItems = products.filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase())
        );
        setFilteredProducts(filteredItems);
    };

    const filteredProductsMemo = useMemo(() => filteredProducts, [filteredProducts]);

    // sort products by price
    const handleSort = (e) => {
        const order = e.target.getAttribute('data-category');
        let sortedItems;
        if (order === 'ascending') {
            sortedItems = [...filteredProducts].sort((a, b) => a.price - b.price);
            
        } else if (order === 'descending') {
            sortedItems = [...filteredProducts].sort((a, b) => b.price - a.price);
            
        }

        setFilteredProducts(sortedItems);
    }

    // function to handle modal to display specific item
    const handleViewProduct = (product) => {
        setSelectedProduct(product);
    };

    // function to add item to cart
    const handleAddToCart = (product) => {
        addToCart(product);
        alert('Item added to cart');
    }

    return (
        <Box bg="red.50">
            <Navbar />
            <Box>
                <Box
                    mt={100}
                    mb={100}
                    backgroundImage={Shopping}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize='cover'
                    height={350}>
                    <Box
                        color='white'
                        pl='15%'
                        pt={100}
                        pb={100}>
                        <Heading pb={10}>Our Products</Heading>
                        <Text>Browse our collection of fabulous products</Text>
                    </Box>
                </Box>
            </Box>
            <Container maxW='container.xl' pb='100px'>
                <Box pb='50px'>
                    <Menu>
                        <MenuButton as={Button} variant='solid' colorScheme='blue' size='md'>
                            Filter
                        </MenuButton>
                        <MenuList>
                            <MenuItem data-category="" onClick={handleFilter}>Defeault</MenuItem>
                            <MenuItem data-category="men's clothing" onClick={handleFilter}>Clothing</MenuItem>
                            <MenuItem data-category="jewelery" onClick={handleFilter}>Jewelery</MenuItem>
                            <MenuItem data-category="electronics" onClick={handleFilter}>Electronics</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} variant='solid' colorScheme='blue' size='md' ml='20px'>
                            Sort
                        </MenuButton>
                        <MenuList>
                            <MenuItem data-category="ascending" onClick={handleSort}>Price Ascending</MenuItem>
                            <MenuItem data-category="descending" onClick={handleSort}>Price Descending</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Grid templateColumns="repeat(4, 1fr)" gap={5} >
                    {loading ? (
                        <Spinner />
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : (
                        filteredProductsMemo.map((product) => (
                            <GridItem key={product.id} colSpan={{ base: 4, sm: 2, md: 1, lg: 1 }}>
                                <Card h={400}>
                                    <CardBody >
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            borderRadius='lg'
                                            h='100px'
                                            mx='auto'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Text size='md'>{product.title}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${product.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter justifyContent='space-evenly'>
                                        <Box>
                                            <Button variant='solid' colorScheme='blue' size='sm' onClick={() => handleViewProduct(product)}>
                                                View
                                            </Button>
                                            <Button variant='ghost' colorScheme='blue' size='sm' onClick={() => handleAddToCart(product)}>
                                                Add to cart
                                            </Button>
                                        </Box>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        ))
                    )}
                </Grid> \

                {/* rendering the modal */}

                {selectedProduct && (
                    <ViewProduct isOpen={true} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
                )}
                
            </Container>
            <Footer />
        </Box>
    )
}

export default Shop;
