import "./style/App.css";
import "./style/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Router } from "./components/Router";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#ffffff",
    800: "#153e75",
    700: "#2a69ac",
  },
  hover: {
    500: "#007bff",
  },
};
const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
