import { Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface InitialInstructionSlideArrowProps {
  icon?: IconType;
  onClick?: () => void;
  position: "left" | "right";
}

export function InitialInstructionSlideArrow({
  icon,
  onClick,
  position,
}: InitialInstructionSlideArrowProps) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w={"40px"}
      h={"40px"}
      textAlign={"center"}
      position={"absolute"}
      bottom={"0px"}
      left={position === "left" ? "14px" : "auto"}
      right={position === "right" ? "14px" : "auto"}
      transition={"opacity .3s"}
      transform={"translateY(-50%)"}
      cursor={"pointer"}
      _hover={{ opacity: 0.6 }}
      onClick={onClick}
      zIndex={1000}
      display={!onClick ? "none" : "flex"}
      bg={"rgba(24,27,35, .5)"}
      borderRadius="full"
    >
      <Icon as={icon} fontSize={30} />
    </Flex>
  );
}
