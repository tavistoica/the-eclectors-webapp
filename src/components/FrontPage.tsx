import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
import React from "react";
import logoCoin from "../assets/guccidoge-coin.png";
import { SocialButton } from "./SocialButton";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BuyButton } from "./BuyButton";

interface FrontPageProps {
  ref: React.RefObject<HTMLInputElement>;
}

export const FrontPage: React.FC<FrontPageProps> = ({ ref }) => {
  return (
    <Container
      p="0"
      m="0"
      maxW={"100vw"}
      overflow="hidden"
      bg="#FDD76B"
      align="center"
      ref={ref}
    >
      <Stack
        align={"center"}
        maxW={{ base: "90vw", md: "80vw" }}
        spacing={{ base: 8, md: 10 }}
        px={{ base: 5, md: 20 }}
        pt={{ base: 10, md: 28 }}
        pb={{ base: 5, md: 8 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
          >
            <Text as={"span"}>Little Meme.</Text>
            <br />
            <Text as={"span"}>Big Dream.</Text>
          </Heading>
          <Text maxW={{ base: "90%", md: "90%", lg: "70%" }}>
            $GDOGE is a community-focused, decentralized cryptocurrency with
            instant rewards for holders. Join the moon mission. 🐶
          </Text>
          <Center>
            <Stack direction={{ base: "column", md: "row" }} spacing={12}>
              <BuyButton />
              <br />
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
          </Center>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"}>
          <Image src={logoCoin} width={{ base: "60%", md: "60%" }} />
        </Flex>
      </Stack>
      <Box className="wave" />
    </Container>
  );
};
