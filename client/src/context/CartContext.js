import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]'); // Retrieve cart data from local storage whenever the page is loaded

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(cartFromLocalStorage);


    useEffect(() => {
        // Update cart data in local storage whenever the cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log('This is your cart: ', cart);
    }

    const removeFromCart = (itemToRemove) => {
        setCart(cart.filter((item) => item.id !== itemToRemove.id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}