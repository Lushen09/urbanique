import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: "'Oswald', sans-serif",
    heading: "'Abril Fatface', cursive",
  },

  styles: {
    global: {
      body: {
        fontSize: "lg",
      },
    },
  },
});

export default theme;