import { ReactElement } from "react";
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
import { IoWalletOutline } from "react-icons/io5";
import { RiSafe2Line } from "react-icons/ri";

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
    >
      <Box maxW={{ base: "90%", md: "80%" }}>
        <Center>
          <Text py={{ md: 12 }} fontWeight="bold" fontSize="3xl">
            🐕 How to buy $GDOGE? 🐕
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
          <Feature
            icon={
              <Icon as={IoWalletOutline} w={50} h={50} color="blackAlpha.900" />
            }
            title={"Instant Reward"}
            text={
              "For every transaction in GucciDoge's network (buy or sell), 2% of the transaction is distributed to existing holders. That means you earn GucciDoge just by holding it in your wallet."
            }
          />
          <Feature
            icon={
              <Icon as={RiSafe2Line} w={50} h={50} color="blackAlpha.900" />
            }
            title={"Secure and Safe"}
            text={
              "GucciDoge has been audited by a third-party firm to give our holders confidence."
            }
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
