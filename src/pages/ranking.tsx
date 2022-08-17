import { Avatar, Box, Flex, Heading, HStack, Icon, Link, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { RiCoinsLine, RiFireLine, RiInstagramLine, RiLinkedinLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useUserData } from "../hooks/useUserData";

export default function Ranking() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { name, money, instagram, linkedIn, fileDataURL } = useUserData();

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
                    <Th></Th>
                    <Th>Usuário</Th>
                    <Th>Movecoins</Th>
                    {/* <Th width='8'></Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1º</Td>
                    <Td>
                      <HStack>
                        <Avatar src={fileDataURL} size="md" name={name} />
                        <Box>
                          <Text color="pink.400" fontWeight="bold">
                            {name}
                          </Text>

                          {!!instagram && (
                            <Flex alignItems={"center"}>
                              <Icon me={1} as={RiInstagramLine}></Icon>
                              <Text>@{`${instagram}`}</Text>
                            </Flex>
                          )}

                          {!!linkedIn && (
                            <Flex alignItems={"center"}>
                              <Icon me={1} as={RiLinkedinLine}></Icon>
                              <Text>@{`${linkedIn}`}</Text>
                            </Flex>
                          )}
                        </Box>
                      </HStack>
                    </Td>
                    <Td>
                      <Text color="gray.300">
                        {/* <Icon as={RiCoinsLine} /> */}
                        <Image
                          width={"40"}
                          height={"37"}
                          src={"/icon-movecoins.png"}
                          alt={"Movecoins"}
                        ></Image>
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
