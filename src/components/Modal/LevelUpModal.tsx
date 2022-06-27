import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FiBarChart } from "react-icons/fi";
import {
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiCoinsLine,
} from "react-icons/ri";

import { useModal } from "../../hooks/useModal";

export function LevelUpModal({ level }) {
  const { onClose } = useModal();

  return (
    <>
      <Flex
        className="logo"
        flexDirection={"column"}
        w={100}
        height={100}
        bg={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={10}
        position={"absolute"}
        left={"50%"}
        top={"0"}
        transform={"translateX(-50%) translateY(-50%)"}
      >
        <Box>
          <Image
            src={"/moveon-saude.jpg"}
            alt="MoveOn Saúde"
            width={68}
            height={78}
          />
        </Box>
      </Flex>

      <Flex p={5} pt={20} direction={"column"} alignItems={"center"}>
        <Text color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          <strong>Parabéns!</strong> Você subiu de level.
        </Text>
        <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
          Continue progredindo. Let’s Move On!
        </Text>
        <Image
          mb={"5"}
          w={"200px"}
          src={`/level${level}.png`}
          alt={`Level ${level}`}
        ></Image>
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
