import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './custom-styles/theme'; // Import custom Chakra UI theme
import './index.css';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
