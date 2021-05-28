import { Button, Link } from "@chakra-ui/react";

export const BuyButton = () => {
  return (
    <Button
      px={2}
      py={1}
      variant="solid"
      rounded={"md"}
      fontWeight="bold"
      bg="#007bff"
      color="white"
    >
      <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa2b40b8b6ab6601c4a308ee0d73a2b924b274883">
        Buy GucciDoge
      </Link>
    </Button>
  );
};
