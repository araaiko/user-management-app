/* 外部import */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

/* 内部import */
import theme from "./theme/theme";
import { Router } from "./router/Router";
import { LoginUserProvider } from "./providers/LoginUserProvider";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <Router />
      </LoginUserProvider>
    </ChakraProvider>
  );
}

export default App;
