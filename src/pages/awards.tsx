import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
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
  RiCheckLine,
  RiCoinsLine,
  RiFireLine,
  RiGiftLine,
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

  const { hasAward } = useUserData();

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" pb="6">
        <Sidebar />

        <Box flex="1" w="100%" maxWidth={1480}>
          <Heading mb="8" size="lg" fontWeight="normal">
            Meus prêmios
          </Heading>

          <Box flex="1" borderRadius="8" bg="gray.800" p={["2", "8"]}>
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>Ação</Th>
                    <Th></Th>
                    {/* <Th width='8'></Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  {!hasAward && (
                    <Tr>
                      <Td>{"Você ainda não conquistou prêmios."}</Td>
                      <Td></Td>
                    </Tr>
                  )}
                  {!!hasAward && (
                    <Tr>
                      <Td>{"Parabéns! Você conquistou o prêmio!"}</Td>
                      <Td>
                        <Button
                          type="button"
                          py="5"
                          cursor="pointer"
                          size="sm"
                          fontSize="lg"
                          colorScheme="pink"
                          rightIcon={<Icon as={RiGiftLine} fontSize="20" />}
                        >
                          Resgatar
                        </Button>
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
