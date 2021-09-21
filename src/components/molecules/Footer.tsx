import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SocialButton } from "../atoms/SocialButton";

const socialButtonSize = 8;

export const Footer = () => {
  return (
    <Box
      bg="white"
      color={useColorModeValue("gray.700", "gray.200")}
      boxShadow="dark-lg"
    >
      <Container
        as={Stack}
        maxW={"100%"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2021 The Eclectors. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"} size={socialButtonSize}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"} size={socialButtonSize}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"} size={socialButtonSize}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
