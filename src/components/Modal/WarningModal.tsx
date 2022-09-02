import { Box, Button, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FiBarChart } from "react-icons/fi";
import { RiArrowRightLine, RiCheckboxCircleLine, RiCoinsLine } from "react-icons/ri";

import { useModal } from "../../hooks/useModal";

export function WarningModal({ title, message }) {
  const { onClose } = useModal();

  return (
    <>
      <Flex p={5} direction={"column"} alignItems={"center"}>
        <Text color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          {title}
        </Text>
        <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
          {message}
        </Text>
      </Flex>
      <Flex
        borderTop={"1px solid white"}
        borderColor={"gray.400"}
        py={10}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          py="5"
          cursor="pointer"
          size="sm"
          fontSize="lg"
          colorScheme="pink"
          rightIcon={<Icon as={RiArrowRightLine} fontSize="20" />}
          onClick={onClose}
        >
          Continuar
        </Button>
      </Flex>
    </>
  );
}
