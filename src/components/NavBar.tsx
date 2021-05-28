import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link,
  Center,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { NavLink } from "./NavLink";
import logo from "../assets/logo.png";
import { BuyButton } from "./BuyButton";

const Links = [
  { title: "Overview", href: "#" },
  { title: "Why GucciDoge?", href: "#" },
  { title: "Roadmap", href: "#" },
  { title: "Tokenomics", href: "#" },
  { title: "Token Structure", href: "#" },
];

interface NavBarProps {
  ref: React.RefObject<HTMLInputElement>;
}

export const NavBar: React.FC<NavBarProps> = ({ ref }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backgroundOn, setBackgroundOn] = useState(false);

  const hamburgerHandler = () => {
    if (isOpen) {
      onClose();
      changeBackground();
    } else {
      onOpen();
      setBackgroundOn(true);
    }
  };

  const changeBackground = () => {
    if (window.scrollY > 10) {
      setBackgroundOn(true);
    } else if (!isOpen) {
      setBackgroundOn(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box
      style={{
        position: "sticky",
        overflow: "hidden",
        top: 0,
        zIndex: 99,
      }}
      bg={backgroundOn ? "brand.900" : "#FDD76B"}
      boxShadow={backgroundOn ? "lg" : ""}
    >
      <Flex
        px={{ base: 1, md: 4 }}
        my={{ base: 1, md: 1 }}
        maxH={{ base: 12, md: 16 }}
        justify={{ base: "space-between", md: "flex-end" }}
        w="100%"
      >
        <Flex justify={{ md: "center" }} w="100%">
          <Box as={Link} href="#">
            <Image
              src={logo}
              height={{ base: 10, md: 16 }}
              alt="GucciDoge Logo"
            />
          </Box>
        </Flex>
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
          fontSize={{ base: 20, md: 30 }}
        >
          {Links.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
          <BuyButton />
        </HStack>
        <Center>
          <IconButton
            size={"sm"}
            variant="ghost"
            colorScheme="blackAlpha"
            icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={hamburgerHandler}
          />
        </Center>
      </Flex>
      {isOpen ? (
        <Flex py={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.title} href={link.href}>
                {link.title}
              </NavLink>
            ))}
            <BuyButton />
          </Stack>
        </Flex>
      ) : null}
    </Box>
  );
};
