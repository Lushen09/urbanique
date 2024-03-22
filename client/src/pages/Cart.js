import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Heading, Text, Divider, Table, TableContainer, Thead, Tbody, Tr, Th, Td, Image, Input } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useUserContext } from '../hooks/useUserContext';

const Cart = () => {
    const { removeFromCart } = useCart();
    const { user } = useUserContext();
    const [cartItems, setCartItems] = useState([]);

    const yourName = user ? user.userName : 'Guest';


    useEffect(() => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
        // Initialize cart items with quantity property when component mounts
        setCartItems(cartFromLocalStorage.map(item => ({ ...item, quantity: 1 })));
    }, []);

    // Function to handle remove item
    const handleRemove = (item) => {
        removeFromCart(item);
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        alert('Item removed from cart');
    }

    // Function to handle quantity change
    const handleQuantityChange = (e, id) => {
        const newQuantity = parseInt(e.target.value, 10);
        const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === id) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem
        })
        setCartItems(updatedCart);
    }


    return (
        <Box bg='red.50'>

            <Navbar />

            <Container maxW='container.xl' pt='100px' pb='100px' >

                <Heading mb={4} textAlign='center' pb='50px'>{yourName}'s Cart</Heading>

                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                                <Th>Subtotal</Th>
                                <Th>Remove</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cartItems.map((item) => (
                                <Tr key={item.id}>
                                    <Td>
                                        <Image src={item.image} alt={item.name} maxW="70px" mr={4} />
                                        <Text fontSize="xl" fontWeight="bold">{item.name}</Text>
                                    </Td>
                                    <Td>${item.price}</Td>
                                    <Td w='10%'>
                                        <Input type="number" min={1} defaultValue={1} onChange={(e) => handleQuantityChange(e, item.id)} />
                                    </Td>
                                    <Td>${item.price * item.quantity}</Td>
                                    <Td>
                                        <Button colorScheme="red" onClick={() => handleRemove(item)}>
                                            <DeleteIcon />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                
                <Divider my={4} />
                <Box>
                    <Text fontSize="lg">Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</Text>
                    <Button mt={4} colorScheme="blue" width="">Proceed to Checkout</Button>
                </Box>

            </Container>

            <Footer />
        </Box>
    );
};

export default Cart;
