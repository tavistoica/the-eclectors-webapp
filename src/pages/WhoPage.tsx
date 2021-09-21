import React, { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Center,
  Image,
} from "@chakra-ui/react";
import Vlad from "../assets/vladDumitru.jpg";
import Darius from "../assets/dariusCarstea.jpg";
import { WHO_PAGE_CONSTANTS } from "../helpers/constants";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      bg="white"
      shadow={"xl"}
      rounded={"lg"}
      px={{ base: 2, md: 4 }}
      py={"5"}
    >
      <Flex direction="column" justify="center">
        <Center>
          <Flex
            w={500}
            h={500}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            mb={1}
          >
            {icon}
          </Flex>
        </Center>
        <Center>
          <Text fontWeight={600}>{title}</Text>
        </Center>
      </Flex>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const WhatIs = () => {
  return (
    <Flex
      bg="#f8f9fa"
      spacing={{ base: 8, md: 10 }}
      px={{ base: 5, md: 20 }}
      pt={{ base: 10, md: 14 }}
      pb={{ base: 5, md: 8 }}
      justify="center"
      className={WHO_PAGE_CONSTANTS.CLASS_NAME}
    >
      <Box maxW={{ base: "90%", md: "80%" }}>
        <Center>
          <Text
            py={{ base: 12, md: 12 }}
            fontWeight="bold"
            fontSize={{ base: "1xl", md: "3xl" }}
          >
            {WHO_PAGE_CONSTANTS.PAGE_TITLE}
          </Text>
        </Center>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={20}>
          <Feature
            icon={
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Vlad}
                alt={WHO_PAGE_CONSTANTS.VLAD}
              />
            }
            title={WHO_PAGE_CONSTANTS.VLAD}
            text={WHO_PAGE_CONSTANTS.VLAD_TEXT}
          />
          <Feature
            icon={
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Darius}
                alt={WHO_PAGE_CONSTANTS.DARIUS}
              />
            }
            title={WHO_PAGE_CONSTANTS.DARIUS}
            text={WHO_PAGE_CONSTANTS.DARIUS_TEXT}
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
