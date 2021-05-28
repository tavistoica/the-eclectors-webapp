import { ReactNode } from "react";
import { Button, Link } from "@chakra-ui/react";

export const NavLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: String;
}) => {
  return (
    <Button
      as={Link}
      px={2}
      py={1}
      variant="link"
      rounded={"md"}
      color="blackAlpha.900"
      _hover={{
        textDecoration: "none",
        color: "hover.500",
      }}
      href={href}
    >
      {children}
    </Button>
  );
};
