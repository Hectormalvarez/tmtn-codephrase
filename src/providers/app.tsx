import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";

import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChakraProvider>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};
