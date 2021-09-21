import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { scroller } from "react-scroll";
import {
  LISTEN_PAGE_CONSTANTS,
  FRONT_PAGE_CONSTANTS,
  WHO_PAGE_CONSTANTS,
} from "../../helpers/constants";

const Links = [
  { title: "Overview", class: FRONT_PAGE_CONSTANTS.CLASS_NAME },
  { title: "Who are The Eclectors?", class: WHO_PAGE_CONSTANTS.CLASS_NAME },
  { title: "Listen Live", class: LISTEN_PAGE_CONSTANTS.CLASS_NAME },
];

interface NavBarProps {
  ref: React.RefObject<HTMLInputElement>;
}

export const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backgroundOn, setBackgroundOn] = useState(false);

  const scrollTo = (className: string) => {
    scroller.scrollTo(className, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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
      bg={backgroundOn ? "whiteAlpha.600" : "#f2f2f2"}
      boxShadow="dark-lg"
    >
      <Flex
        px={{ base: 1, md: 4 }}
        my={{ base: 1, md: 1 }}
        maxH={{ base: 12, md: 16 }}
        justify={{ base: "space-between", md: "flex-end" }}
        w="100%"
      >
        <HStack
          as={"nav"}
          spacing={4}
          padding={3}
          display={{ base: "none", md: "flex" }}
          fontSize={{ base: 20, md: 30 }}
        >
          {Links.map((link) => (
            <Button key={link.title} onClick={() => scrollTo(link.class)}>
              {link.title}
            </Button>
          ))}
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
              <Button key={link.title} onClick={() => scrollTo(link.class)}>
                {link.title}
              </Button>
            ))}
          </Stack>
        </Flex>
      ) : null}
    </Box>
  );
};
