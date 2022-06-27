import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { reverse } from "dns/promises";
import NextLink from "next/link";
import {
  RiCoinsLine,
  RiFireLine,
  RiPlayCircleLine,
  RiTimeLine,
} from "react-icons/ri";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useHistory } from "../hooks/useHistory";
import { useUserData } from "../hooks/useUserData";

export default function History() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { name, money } = useUserData();
  const { userHistories } = useHistory();
  const reverseUserHistories = [...userHistories].reverse();

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <Heading mb="8" size="lg" fontWeight="normal">
            Histórico de acessos
          </Heading>

          <Box flex="1" borderRadius="8" bg="gray.800" p={["2", "8"]}>
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Data</Th>
                    <Th>Ação</Th>
                    {/* <Th width='8'></Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  {!!userHistories &&
                    reverseUserHistories.map((history) => {
                      return (
                        <Tr key={history.date + Math.random()}>
                          <Td>{history.date}</Td>

                          <Td>
                            <Text color="gray.300">{history.action}</Text>
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
