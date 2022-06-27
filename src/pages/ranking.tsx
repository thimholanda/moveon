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
import NextLink from "next/link";
import {
  RiCoinsLine,
  RiFireLine,
  RiPlayCircleLine,
  RiTimeLine,
} from "react-icons/ri";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useUserData } from "../hooks/useUserData";

export default function Ranking() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { name, money } = useUserData();

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <Heading mb="8" size="lg" fontWeight="normal">
            Ranking
          </Heading>

          <Box flex="1" borderRadius="8" bg="gray.800" p={["2", "8"]}>
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Posição</Th>
                    <Th>Usuário</Th>
                    <Th>Move Coins</Th>
                    {/* <Th width='8'></Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1º lugar</Td>
                    <Td>
                      <Box>
                        <Link color="pink.400" onMouseEnter={() => {}}>
                          <Text fontWeight="bold">{name}</Text>
                        </Link>
                      </Box>
                    </Td>
                    <Td>
                      <Text color="gray.300">
                        <Icon as={RiCoinsLine} />
                        {money}
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
