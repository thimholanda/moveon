import { Box, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { RiCheckboxCircleLine, RiFireLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";

import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header";
import { LevelUpModal } from "../../components/Modal/LevelUpModal";
import { Sidebar } from "../../components/Sidebar";
import { useModal } from "../../hooks/useModal";
import { useWorkouts } from "../../hooks/useWorkouts";

export default function Workouts() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [filter, setFilter] = useState("todos");

  const { workouts } = useWorkouts();

  const allCategories: Array<string> = workouts.map((workout) => {
    return workout.category;
  });

  let categories = [];

  allCategories.map((category) => {
    if (!categories.includes(category)) categories.push(category);
  });

  categories.sort();

  function handleFilterWorkouts(event: ChangeEvent<HTMLSelectElement>) {
    setFilter(event.currentTarget.value);
  }
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <SimpleGrid
            columns={[1, 2]}
            mb="8"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading mb={[2, 0]} size="lg" fontWeight="normal">
              Treinos
            </Heading>
            <Box as={"form"}>
              <Select
                name="interests"
                onChange={(e) => {
                  handleFilterWorkouts(e);
                }}
                value={filter}
              >
                <option value={"todos"}>Todos</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={4}>
            {workouts.map((workout) => {
              if (workout.category === filter || filter === "todos") {
                return (
                  <Link
                    key={workout.id}
                    href={`/workouts/${workout.id}`}
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
                            {!workout.isCompleted && (
                              <Icon as={RiPlayCircleLine} fontSize="40" />
                            )}
                            {workout.isCompleted && (
                              <Icon
                                as={RiCheckboxCircleLine}
                                color={"green.400"}
                                fontSize="40"
                              />
                            )}
                          </HStack>
                          <Image
                            alt={workout.title}
                            src={workout.thumbnail}
                          ></Image>
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
                                {Math.floor(workout.time / 60)} min.
                              </Text>
                            </Flex>
                            <Flex alignItems="center">
                              <Icon mr="1" color="orange.400" as={RiFireLine} />
                              <Text as="small" color="orange.400">
                                {workout.calories} cal
                              </Text>
                            </Flex>
                          </HStack>

                          <HStack>
                            <Text
                              as="small"
                              fontWeight="bold"
                              color="green.400"
                            >
                              {workout.progress.length > 0
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
                                  workout.progress.length > 0
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
                    </a>
                  </Link>
                );
              }
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
}
