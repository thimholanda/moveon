import { Box, Button, Flex, Icon, Image, Modal, ModalContent, ModalOverlay, SimpleGrid, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowRightLine, RiCheckLine, RiQuestionFill } from "react-icons/ri";
import * as yup from "yup";

import { Evaluation, useEvaluations } from "../../hooks/useEvaluations";
import { useHistory, UserHistory } from "../../hooks/useHistory";
import { useModal } from "../../hooks/useModal";
import { Input } from "../Form/Input";

export function EvaluationModal() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { onClose } = useModal();
  const { setEvaluation } = useEvaluations();
  const { addToHistory, userHistories } = useHistory();

  const { isOpen, onOpen, onClose: onCloseLocal } = useDisclosure();

  //   squats: string;
  //   abs: string;
  //   pushUps: string;
  //   weight: string;

  const [squats, setSquats] = useState("");
  const [abs, setAbs] = useState("");
  const [pushUps, setPushUps] = useState("");
  const [weight, setWeight] = useState("");

  function handleClose() {
    // remove
    const evaluation: Evaluation = {
      squats,
      abs,
      pushUps,
      weight,
    };

    const userHistory: UserHistory = {
      action: "Enviou uma avaliação",
    };

    setEvaluation(evaluation);
    addToHistory(userHistory);
    onClose();
  }
  useEffect(() => {
    console.log(userHistories);
  }, [userHistories]);
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
          É a hora de registrar sua evolução!
          <Button border={"1px"} mb={5} mt={1} bg={"transparent"} onClick={onOpen} _hover={{ color: "white" }}>
            Clique aqui e veja como executar <Icon fontSize={"2xl"} cursor={"pointer"} as={RiQuestionFill} ms={2}></Icon>
          </Button>
        </Text>
        <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
          Marque o número máximo de repetições que conseguir fazer em 1 minuto de cada exercício.
        </Text>
        <Flex as="form" width="100%" borderRadius={8} flexDir="column">
          <SimpleGrid columns={isWideVersion ? 3 : 1} spacing={4} mb={6}>
            <Input isTransparent name="squats" type="text" label="Agachamentos" onChange={(e) => setSquats(e.target.value)} isRequired />
            <Input isTransparent name="abs" type="text" label="Abdominais" onChange={(e) => setAbs(e.target.value)} isRequired />
            {/* <Input
              isTransparent
              name="genre"
              type="text"
              label="Flexões"
              onChange={(e) => setPushUps(e.target.value)}
            /> */}
            <Input isTransparent name="weight" type="text" label="Peso atual" onChange={(e) => setWeight(e.target.value)} isRequired />
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex py={10} pt={4} alignItems={"center"} justifyContent={"center"}>
        <Button py="5" cursor="pointer" size="sm" fontSize="lg" colorScheme="pink" rightIcon={<Icon as={RiCheckLine} fontSize="20" />} onClick={handleClose}>
          Enviar
        </Button>
      </Flex>

      <Modal onClose={onCloseLocal} isOpen={isOpen} size={"xl"} scrollBehavior="inside">
        <ModalOverlay bgColor={"rgba(6, 6, 7, .96)"} />
        <ModalContent borderRadius={10} m={5} border={"1px solid white"} borderColor={"gray.400"} bg={"rgba(179, 181, 198, 0.1)"}>
          <Flex p={5} direction={"column"} alignItems={"center"}>
            <Text mb={6} fontSize={"lg"} color={"gray.200"} textAlign={"center"}>
              Veja como fazer os exercícios da avaliação física.
            </Text>
            <Box as={"div"} mb={"4"} w={"100%"} borderRadius={"8"} overflow={"hidden"}>
              <Vimeo responsive video={631339894} showTitle={false} showByline={false} showPortrait={false} />
            </Box>
          </Flex>
          <Flex borderTop={"1px solid white"} borderColor={"gray.400"} py={10} alignItems={"center"} justifyContent={"center"}>
            <Button py="5" cursor="pointer" size="sm" fontSize="lg" colorScheme="pink" rightIcon={<Icon as={RiArrowRightLine} fontSize="20" />} onClick={onCloseLocal}>
              Continuar
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
