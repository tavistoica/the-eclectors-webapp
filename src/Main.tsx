import React from "react";
import { Flex } from "@chakra-ui/react";
import { FrontPage } from "./pages/FrontPage";
import { NavBar } from "./components/molecules/NavBar";
import { Footer } from "./components/molecules/Footer";
import { WhatIs } from "./pages/WhoPage";
import { HowToBuy } from "./pages/ListenPage";

const Main = () => (
  <>
    <NavBar />
    <Flex direction="column">
      <FrontPage />
      <WhatIs />
      <HowToBuy />
    </Flex>
    <Footer />
  </>
);

export { Main };
