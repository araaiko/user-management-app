/* 外部import */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

/* 内部import */
import theme from "./theme/theme";
import { Router } from "./router/Router";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
