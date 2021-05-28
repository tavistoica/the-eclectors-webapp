import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { FrontPage } from "../components/FrontPage";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { WhatIs } from "../components/WhatIs";
import { HowToBuy } from "../components/HowToBuy";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const frontPageRef = useRef(null);

  return (
    <>
      <NavBar ref={frontPageRef} />

      <Flex direction="column">
        <FrontPage ref={frontPageRef} />
        <WhatIs />
        <HowToBuy />
      </Flex>
      <Footer />
    </>
  );
};
