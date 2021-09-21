import React from "react";
import { Container, Stack, Flex, Image, Box, Center } from "@chakra-ui/react";
import logo from "../assets/eclectors-logo.png";
import { SocialButton } from "../components/atoms/SocialButton";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ReactPlayer from "react-player/mixcloud";
import bg from "../assets/background.png";
import { FRONT_PAGE_CONSTANTS } from "../helpers/constants";

export const FrontPage: React.FC = () => {
  return (
    <Container
      p="0"
      m="0"
      maxW={"100vw"}
      overflow="hidden"
      bgImage={bg}
      align="center"
      className={FRONT_PAGE_CONSTANTS.CLASS_NAME}
    >
      <Stack
        align={"center"}
        maxW={{ base: "90vw", md: "80vw" }}
        spacing={{ base: 8, md: 10 }}
        px={{ base: 5, md: 20 }}
        pt={{ base: 10, md: 28 }}
        pb={{ base: 5, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1}>
          <Image src={logo} width={{ base: "120%", md: "120%" }} />
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} color="#2c2c2c">
          <Center>
            <ReactPlayer
              url={FRONT_PAGE_CONSTANTS.SONG_URL}
              controls
              width="100%"
              height="50%"
            />
          </Center>
          <Center>
            <Stack direction={{ base: "column", md: "row" }} spacing={12}>
              <Stack direction={"row"} spacing={6}>
                <SocialButton
                  label={"Twitter"}
                  href={"#"}
                  size={FRONT_PAGE_CONSTANTS.SOCIAL_BUTTON_SIZE}
                >
                  <FaTwitter />
                </SocialButton>
                <SocialButton
                  label={"YouTube"}
                  href={"#"}
                  size={FRONT_PAGE_CONSTANTS.SOCIAL_BUTTON_SIZE}
                >
                  <FaYoutube />
                </SocialButton>
                <SocialButton
                  label={"Instagram"}
                  href={"#"}
                  size={FRONT_PAGE_CONSTANTS.SOCIAL_BUTTON_SIZE}
                >
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
          </Center>
        </Stack>
      </Stack>
      <Box className="wave" />
    </Container>
  );
};
