import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  href: string;
  size: number;
}

export const SocialButton: React.FC<Props> = ({
  children,
  label,
  href,
  size,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("whiteAlpha.700", "blackAlpha.100")}
      rounded={"full"}
      w={size}
      h={size}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        color: "whiteAlpha.900",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
