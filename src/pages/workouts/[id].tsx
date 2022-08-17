import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BiMeh, BiSad, BiSmile } from "react-icons/bi";
import { FiBarChart } from "react-icons/fi";
import {
  RiArrowRightLine,
  RiArrowRightSLine,
  RiCheckboxCircleLine,
  RiCloseLine,
  RiCoinsLine,
  RiFireLine,
  RiTimeLine,
} from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useHistory, UserHistory } from "../../hooks/useHistory";
import { useNotifications } from "../../hooks/useNotifications";
import { useUserData } from "../../hooks/useUserData";
import { useWorkouts } from "../../hooks/useWorkouts";

interface VideoData {
  seconds: number;
  percent: number;
  duration: number;
}

export default function Workout() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();
  const { id: workooutId } = router.query;

  const [videoProgress, setVideoProgress] = useState<number[]>([]);
  const { addExperiencePoints, addMoney } = useUserData();
  const { workouts, setWorkouts } = useWorkouts();
  const { createNotification } = useNotifications();
  const { addToHistory } = useHistory();
  const updatedWorkouts = useMemo(() => [...workouts], [workouts]);

  const workout = updatedWorkouts.find(
    (workout) => workout.id === Number(workooutId)
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const history: UserHistory = {
      action: `Acessou o treino: ${workout.title}`,
    };
    addToHistory(history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCompletedWorkout = useCallback(() => {
    const workout = updatedWorkouts.find(
      (workout) => workout.id === Number(workooutId)
    );
    workout.isCompleted = true;
    onOpen();
    addExperiencePoints(50);
    addMoney(10);
    createNotification(`Você concluiu a aula: ${workout.title}`);
    setWorkouts(updatedWorkouts);
    const history: UserHistory = {
      action: `Concluiu o treino: ${workout.title}`,
    };
    addToHistory(history);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedWorkouts]);

  useEffect(() => {
    if (videoProgress.length > 1 && !workout.isCompleted) {
      setCompletedWorkout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoProgress]);

  function handleVideoProgress({ seconds, percent, duration }: VideoData) {
    const currentPercent = Math.ceil(percent * 100);

    if (!workout.progress.includes(currentPercent)) {
      workout.progress.push(currentPercent);
      workout.currentTime = seconds;
      setVideoProgress([...workout.progress]);
      setWorkouts(updatedWorkouts);
    }
  }

  function handleFellingAfterWorkout(status: 1 | 2 | 3) {
    workout.feelingAfterWorkout = status;
    setWorkouts(updatedWorkouts);
  }

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        // isCentered
        size={"xl"}
        // scrollBehavior="inside"
      >
        <ModalOverlay bgColor={"rgba(6, 6, 7, .96)"} />
        <ModalContent
          borderRadius={10}
          m={5}
          border={"1px solid white"}
          borderColor={"gray.400"}
          bg={"rgba(179, 181, 198, 0.1)"}
        >
          <Flex p={5} direction={"column"} alignItems={"center"}>
            <Icon
              mb={3}
              fontSize={"6xl"}
              color={"green.400"}
              as={RiCheckboxCircleLine}
            ></Icon>
            <Text
              color={"gray.200"}
              fontSize={"2xl"}
              textAlign={"center"}
              mb={10}
            >
              <strong>Ótimo!</strong> Você concluiu este treino e ganhou:
            </Text>
            <SimpleGrid columns={[1, 2]} spacing={10} mb={7}>
              <Flex alignItems={"center"} justifyContent={"center"}>
                {/* <Icon
                  fontSize={"5xl"}
                  color={"gray.100"}
                  as={FiBarChart}
                  mr={2}
                ></Icon> */}
                <Image
                  maxW={200}
                  minW={175}
                  w={"100%"}
                  alt="movecoins"
                  src="/movecoins.png"
                ></Image>
                {/* <Text fontSize={"3xl"} color={"gray.100"}>
                  + 50 <strong>XP</strong>
                </Text> */}
              </Flex>
              <Flex alignItems={"center"} justifyContent={"center"} mx={2}>
                {/* <Icon
                  fontSize={"5xl"}
                  color={"gray.100"}
                  as={RiCoinsLine}
                ></Icon>
                <Text fontSize={"3xl"} color={"gray.100"}>
                  + 100
                </Text> */}
                <Image
                  maxW={200}
                  minW={175}
                  w={"100%"}
                  alt="movecoins"
                  src="/xp.png"
                ></Image>
              </Flex>
            </SimpleGrid>
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
        </ModalContent>
      </Modal>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
          <Sidebar />

          <Box flex="1" w="100%" maxWidth={1480}>
            <Heading mb="8" size="lg" fontWeight="normal">
              <Link href="/workouts" passHref>
                <a>
                  <Box as="span" color="pink.400">
                    Treinos
                  </Box>
                </a>
              </Link>{" "}
              <Icon display="inline-block" pt="3" as={RiArrowRightSLine} />
              {!!workout && workout.title}
            </Heading>

            <Box p={["4", "8"]} bg="gray.800" borderRadius="8" pb="4">
              <Box
                h={isWideVersion ? "100%" : "auto"}
                bg="gray.800"
                borderRadius="8"
                pb="7"
              >
                {!!workout && !!workout.isCompleted && (
                  <>
                    <Flex alignItems={"center"} mb={"5"}>
                      <Icon
                        fontSize={"2xl"}
                        mr={1}
                        as={RiCheckboxCircleLine}
                        color={"green.400"}
                      ></Icon>
                      <Text fontSize={"lg"} color={"green.400"}>
                        Treino concluído
                      </Text>
                    </Flex>
                    <Flex
                      borderRadius={"10"}
                      mb={5}
                      px={6}
                      py={4}
                      bg={"gray.900"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Text mr={2}>Como você se sentiu após o treino?</Text>
                      <Flex>
                        <IconButton
                          bg={"gray.700"}
                          borderRadius={"full"}
                          p={"0"}
                          fontSize={"2xl"}
                          aria-label="não muito bem"
                          icon={<BiSad />}
                          color={
                            !!workout &&
                            !!workout.feelingAfterWorkout &&
                            workout.feelingAfterWorkout === 1
                              ? "red.400"
                              : "gray.400"
                          }
                          mr={2}
                          onClick={() => handleFellingAfterWorkout(1)}
                        ></IconButton>
                        <IconButton
                          bg={"gray.700"}
                          borderRadius={"full"}
                          p={"0"}
                          fontSize={"2xl"}
                          aria-label="bem"
                          color={
                            !!workout &&
                            !!workout.feelingAfterWorkout &&
                            workout.feelingAfterWorkout === 2
                              ? "orange.400"
                              : "gray.400"
                          }
                          icon={<BiMeh />}
                          mr={2}
                          onClick={() => handleFellingAfterWorkout(2)}
                        ></IconButton>
                        <IconButton
                          bg={"gray.700"}
                          borderRadius={"full"}
                          p={"0"}
                          fontSize={"2xl"}
                          aria-label="muito bem"
                          color={
                            !!workout &&
                            !!workout.feelingAfterWorkout &&
                            workout.feelingAfterWorkout === 3
                              ? "green.400"
                              : "gray.400"
                          }
                          icon={<BiSmile />}
                          onClick={() => handleFellingAfterWorkout(3)}
                        ></IconButton>
                      </Flex>
                    </Flex>
                  </>
                )}

                <Box as={"div"} mb={"4"} borderRadius={"8"} overflow={"hidden"}>
                  {!!workout && (
                    <Vimeo
                      responsive
                      video={workout.videoId}
                      showTitle={false}
                      showByline={false}
                      showPortrait={false}
                      onTimeUpdate={handleVideoProgress}
                      start={workout.currentTime}
                    />
                  )}
                </Box>

                <Flex justifyContent="space-between">
                  <HStack color="gray.200">
                    {isWideVersion && (
                      <Text as="small" fontWeight="bold">
                        {!!workout && workout.category}
                      </Text>
                    )}
                    <Flex alignItems="center">
                      <Icon mr="1" as={RiTimeLine} />
                      <Text as="small">
                        {!!workout && Math.floor(workout.time / 60)} min.
                      </Text>
                    </Flex>
                    <Flex alignItems="center">
                      <Icon mr="1" color="orange.400" as={RiFireLine} />
                      <Text as="small" color="orange.400">
                        {!!workout && workout.calories} cal
                      </Text>
                    </Flex>
                  </HStack>

                  <HStack>
                    <Text as="small" fontWeight="bold" color="green.400">
                      {!!workout && workout.progress.length > 0
                        ? `${workout.progress.length - 1}%`
                        : "0%"}
                    </Text>
                    <Flex
                      flex="1"
                      height="1"
                      width={["8", "20"]}
                      bg="gray.100"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Box
                        width={
                          !!workout && workout.progress.length > 0
                            ? `${workout.progress.length - 1}%`
                            : "0%"
                        }
                        height="100%"
                        bg="green.400"
                      ></Box>
                    </Flex>
                  </HStack>
                </Flex>
              </Box>
              <Text mb="4">{!!workout && workout.description}</Text>
              <HStack justifyContent={"center"}>
                <Link href="/workouts" passHref>
                  <a>
                    <Button
                      mt="5"
                      py="5"
                      cursor="pointer"
                      size="sm"
                      fontSize="lg"
                      colorScheme="pink"
                      rightIcon={<Icon as={RiCloseLine} fontSize="20" />}
                    >
                      Fechar treino
                    </Button>
                  </a>
                </Link>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
