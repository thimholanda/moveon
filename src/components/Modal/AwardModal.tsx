import { Box, Button, Flex, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FiBarChart } from "react-icons/fi";
import { RiArrowRightLine, RiCheckboxCircleLine, RiCoinsLine } from "react-icons/ri";

import { useModal } from "../../hooks/useModal";

export function AwardModal() {
  const { onClose } = useModal();

  return (
    <>
      {/* <Flex
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
      </Flex> */}

      <Flex p={5} direction={"column"} alignItems={"center"}>
        <Text color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          Você e sua empresa plantaram 1 árvore!
        </Text>
        <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
          {`Continue assim, o meio ambiente agradece.`}
        </Text>
        <Image mb={"5"} w={"200px"} src={"/tree.png"} alt={"Prêmio"}></Image>
      </Flex>

      {/* <Flex p={5} direction={"column"} alignItems={"center"}>
        <Text color={"blue.500"} fontSize={"2xl"} textAlign={"center"}>
          <strong>Parabéns!</strong> Você conquistou o prêmio!
        </Text>
        <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
          {`Acesse o menu "meus prêmios" para resgatá-lo.`}
        </Text>
        <Image mb={"5"} w={"200px"} src={"/premio.png"} alt={"Prêmio"}></Image>
      </Flex> */}
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
