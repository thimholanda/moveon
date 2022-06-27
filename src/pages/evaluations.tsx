import { Box, Flex, Heading, Icon, Link, ListItem, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";
import { RiArrowRightSLine, RiBarChartBoxLine, RiCoinsLine, RiTimeLine } from "react-icons/ri";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useEvaluations } from "../hooks/useEvaluations";

export default function Article() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { evaluations } = useEvaluations();

  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <Heading mb="8" size="lg" fontWeight="normal">
            Minhas avaliações
          </Heading>

          <Box p={["4", "8"]} bg="gray.800" borderRadius="8" pb="4">
            <SimpleGrid columns={[1, 2]} spacing={4}>
              {!!evaluations &&
                evaluations.map((evaluation) => (
                  <Flex
                    key={evaluation.id}
                    alignItems="center"
                    justifyContent="space-between"
                    direction={"column"}
                    bg="gray.900"
                    borderRadius="8"
                    p="4"
                  >
                    <Text
                      w={"100%"}
                      textAlign={"left"}
                      color="gray.300"
                      fontSize="1xl"
                      mb={5}
                      bg={"gray.700"}
                      borderRadius={5}
                      px={3}
                      py={1}
                      fontWeight={"bold"}
                    >
                      {date}
                    </Text>
                    <SimpleGrid w={"100%"} columns={[1, 2]} spacing={4}>
                      <Flex direction="column" mb={5}>
                        <Text
                          color="gray.100"
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                        >
                          {evaluation.squats}
                        </Text>
                        <Text color="gray.400">Agachamentos</Text>
                      </Flex>
                      <Flex w={"100%"} direction="column">
                        <Text
                          color="gray.100"
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                        >
                          {evaluation.abs}
                        </Text>
                        <Text color="gray.400">Abdominais</Text>
                      </Flex>
                      <Flex w={"100%"} direction="column">
                        <Text
                          color="gray.100"
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                        >
                          {evaluation.pushUps}
                        </Text>
                        <Text color="gray.400">Flexões</Text>
                      </Flex>
                      <Flex w={"100%"} direction="column">
                        <Text
                          color="gray.100"
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                        >
                          {evaluation.weight}
                        </Text>
                        <Text color="gray.400">Kg</Text>
                      </Flex>
                    </SimpleGrid>
                  </Flex>
                ))}
            </SimpleGrid>

            <Text color={"gray.200"} mt={"10"} mb={"5"}>
              Assista ao vídeo abaixo se tiver dúvidas em como fazer os
              exercícios da avaliação:
            </Text>
            <Box as={"div"} mb={"4"} borderRadius={"8"} overflow={"hidden"}>
              <Vimeo
                responsive
                video={631339894}
                showTitle={false}
                showByline={false}
                showPortrait={false}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
