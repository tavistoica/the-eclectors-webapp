import React, { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { GrGroup } from "react-icons/gr";
import { LISTEN_PAGE_CONSTANTS } from "../helpers/constants";

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
            w={16}
            h={16}
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

export const HowToBuy = () => {
  return (
    <Flex
      bg="#f8f9fa"
      spacing={{ base: 8, md: 10 }}
      px={{ base: 5, md: 20 }}
      pt={{ base: 10, md: 14 }}
      pb={{ base: 5, md: 8 }}
      justify="center"
      className={LISTEN_PAGE_CONSTANTS.CLASS_NAME}
    >
      <Box maxW={{ base: "90%", md: "80%" }}>
        <Center>
          <Text py={{ md: 12 }} fontWeight="bold" fontSize="3xl">
            {LISTEN_PAGE_CONSTANTS.PAGE_TITLE}
          </Text>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
          <Feature
            icon={<Icon as={GrGroup} w={50} h={50} />}
            title={"Community Power"}
            text={
              "$GDOGE is fully decentralized and owned by its fun, vibrant community. We welcome and embrace diverse perspectives to build KISHU into the best community in crypto."
            }
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
