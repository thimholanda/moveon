/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Heading, HStack, Icon, Image, Img, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { default as Link, default as NextLink } from "next/link";
import { useEffect } from "react";
import { RiBarChartBoxLine, RiCheckboxCircleLine, RiEyeLine, RiFileList3Line, RiFireLine, RiGift2Line, RiHandHeartLine, RiLiveLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";

import { Header } from "../components/Header";
import { AwardModal } from "../components/Modal/AwardModal";
import { EvaluationModal } from "../components/Modal/EvaluationModal";
import { Sidebar } from "../components/Sidebar";
import { useEvaluations } from "../hooks/useEvaluations";
import { useHistory, UserHistory } from "../hooks/useHistory";
import { useModal } from "../hooks/useModal";
import { useNotifications } from "../hooks/useNotifications";
import { useUserData } from "../hooks/useUserData";
import { useWorkouts, Workout } from "../hooks/useWorkouts";

export default function Dashboard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen, defineModalComponent } = useModal();
  const { evaluations } = useEvaluations();
  const { workouts } = useWorkouts();

  const { createNotification } = useNotifications();
  const { addToHistory } = useHistory();

  const completedWorkouts = workouts.filter((workout) => {
    return workout.isCompleted;
  });

  const incompleteWorkouts = workouts.filter((workout) => {
    return !workout.isCompleted;
  });

  const { level, trees, setTrees, visitedBlog, setHasAward } = useUserData();
  let conquests = [];

  if (level > 2) {
    conquests = [level - 1, level];
  } else {
    conquests = [level];
  }

  useEffect(() => {
    if (level === 3 && trees === 0) {
      defineModalComponent(<AwardModal />);
      setHasAward(true);
      createNotification("Parabéns! Você conquistou o prêmio.");
      const history: UserHistory = {
        action: `Conquistou o prêmio`,
      };
      addToHistory(history);
      onOpen();
    }
  }, [level]);

  useEffect(() => {
    console.log(evaluations.length);
    if (evaluations.length === 0) {
      defineModalComponent(<EvaluationModal />);
      onOpen();
    }
  }, [evaluations]);

  // useEffect(() => {
  //   if (level === 3 && evaluations.length === 1) {
  //     defineModalComponent(<EvaluationModal />);
  //     onOpen();
  //   }
  // }, [level, evaluations]);

  useEffect(() => {
    if (level === 3 && trees === 0) {
      setTrees(1);
    }
  }, [trees, level]);

  let workout: Workout;

  if (incompleteWorkouts.length === 0) {
    workout = workouts.find((workout) => workout.id === 1);
  } else {
    workout = incompleteWorkouts[0];
  }

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="5">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <Heading mb="8" size="lg" fontWeight="normal">
            Dashboard
          </Heading>
          <VStack spacing="4">
            <SimpleGrid
              w="100%"
              gap="4"
              minChildWidth="320px"
              alignItems="flex-start"
            >
              <Link
                key={!!workout && workout.id}
                href={`/workouts/${!!workout && workout.id}`}
                passHref
              >
                <a>
                  <Box
                    h={isWideVersion ? "100%" : "auto"}
                    p={["2", "8"]}
                    bg="gray.800"
                    borderRadius="8"
                    pb="4"
                  >
                    <Text fontSize="lg" mb="5">
                      Pronto? Então let&apos;s move on!
                    </Text>
                    <Box
                      position="relative"
                      mb="3"
                      borderRadius="8"
                      overflow="hidden"
                    >
                      <HStack
                        position="absolute"
                        top={["4", "6"]}
                        left={["4", "6"]}
                      >
                        {!!workout && !workout.isCompleted && (
                          <Icon as={RiPlayCircleLine} fontSize="40" />
                        )}
                        {!!workout && workout.isCompleted && (
                          <Icon
                            as={RiCheckboxCircleLine}
                            color={"green.400"}
                            fontSize="40"
                          />
                        )}
                      </HStack>
                      {!!workout && (
                        <Image
                          alt={workout.title}
                          src={workout.thumbnail}
                        ></Image>
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
                        <HStack spacing={1}>
                          <Text as="small" fontWeight="bold" color="green.400">
                            {!!workout && workout.progress.length > 0
                              ? `${workout.progress.length - 1}%`
                              : "0%"}
                          </Text>
                          <Flex
                            flex="1"
                            height="1"
                            width={["8", "10"]}
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

                        <HStack spacing={1}>
                          <Icon
                            display={"inline-block"}
                            color="blue.400"
                            as={RiEyeLine}
                          />
                          <Text as="small" fontWeight="bold" color="blue.400">
                            {workout.watchedTimes}
                          </Text>
                        </HStack>
                      </HStack>
                    </Flex>
                  </Box>
                </a>
              </Link>

              <Link href="/blog/article">
                <a>
                  <Box
                    h={isWideVersion ? "100%" : "auto"}
                    p={["2", "8"]}
                    bg="gray.800"
                    borderRadius="8"
                    pb="4"
                  >
                    <Text fontSize="lg" mb="5">
                      Última matéria do blog
                    </Text>
                    <Box mb="3" borderRadius="8" overflow="hidden">
                      <Image src="/yoga-meditacao.jpg" alt="Yoga e meditacao" />
                    </Box>
                    <Flex color="gray.200" justifyContent="space-between">
                      <Text as="h2" fontWeight="bold">
                        Praticar yoga e meditação
                      </Text>
                      <Flex alignItems="center">
                        <Icon mr="1" as={RiTimeLine} />
                        <Text as="small">3 min.</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </a>
              </Link>
            </SimpleGrid>

            <SimpleGrid
              w="100%"
              gap="4"
              minChildWidth="320px"
              alignItems="flex-start"
            >
              <Box
                position="relative"
                h={isWideVersion ? "100%" : "auto"}
                p={["2", "8"]}
                bg="gray.800"
                borderRadius="8"
                pb="4"
              >
                <Text fontSize="lg" mb="5">
                  Histórico
                </Text>

                <SimpleGrid columns={[1, 2]} spacing={4}>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="gray.900"
                    height="80px"
                    borderRadius="8"
                    p="4"
                  >
                    <Flex direction="column">
                      <Icon
                        as={RiBarChartBoxLine}
                        color="gray.400"
                        fontSize="20"
                      />
                      <Text color="gray.400">Ranking</Text>
                    </Flex>
                    <Text color="gray.200" fontWeight="bold" fontSize="4xl">
                      1º
                    </Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="gray.900"
                    height="80px"
                    borderRadius="8"
                    p="4"
                  >
                    <Flex direction="column">
                      <Icon as={RiLiveLine} color="gray.400" fontSize="20" />
                      <Text color="gray.400">Treinos assistidos</Text>
                    </Flex>
                    <Text color="gray.200" fontWeight="bold" fontSize="4xl">
                      {!!completedWorkouts && completedWorkouts.length}
                    </Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="gray.900"
                    height="80px"
                    borderRadius="8"
                    p="4"
                  >
                    <Flex direction="column">
                      <Icon
                        as={RiFileList3Line}
                        color="gray.400"
                        fontSize="20"
                      />
                      <Text color="gray.400">Matérias lidas</Text>
                    </Flex>
                    <Text color="gray.200" fontWeight="bold" fontSize="4xl">
                      {!!visitedBlog && visitedBlog ? 1 : 0}
                    </Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="gray.900"
                    height="80px"
                    borderRadius="8"
                    p="4"
                  >
                    <Flex direction="column">
                      <Icon
                        as={RiHandHeartLine}
                        color="gray.400"
                        fontSize="20"
                      />
                      <Text color="gray.400">Árvores plantadas</Text>
                    </Flex>
                    <Text color="gray.200" fontWeight="bold" fontSize="4xl">
                      {trees}
                    </Text>
                  </Flex>
                </SimpleGrid>

                {/* <NextLink href={"/dashboard"} passHref>
                  <Button
                    as="a"
                    mt="5"
                    cursor="pointer"
                    size="sm"
                    fontSize="small"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiGift2Line} fontSize="20" />}
                  >
                    
                  </Button>
                </NextLink> */}
              </Box>

              <Box
                h={isWideVersion ? "100%" : "auto"}
                p={["2", "8"]}
                bg="gray.800"
                borderRadius="8"
                pb="4"
              >
                <Text fontSize="lg" mb="5">
                  Últimas conquistas
                </Text>
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  {level > 1 &&
                    conquests.map((conquest) => (
                      <Flex
                        key={conquest}
                        bg="gray.900"
                        borderRadius="8"
                        alignItems="center"
                        justifyContent="center"
                        py={"10"}
                      >
                        <Image
                          display="block"
                          width={"70%"}
                          src={`/level${conquest}.png`}
                          alt="Insígnias"
                        />
                      </Flex>
                    ))}
                  {level <= 1 && (
                    <Text color="gray.400">
                      Siga em frente e desbloqueie os levels.
                    </Text>
                  )}
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
