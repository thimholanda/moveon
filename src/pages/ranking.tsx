import NextLink from "next/link";
import { Box, Flex, Heading, HStack, Icon, Link, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiCoinsLine, RiFireLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Ranking() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex direction='column' h='100vh'>

            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>

                <Sidebar />

                <Box flex='1' borderRadius='8' bg='gray.800' p='8'>

                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Ranking</Heading>
                    </Flex>

                    <>
                        <Table colorScheme='whiteAlpha'>
                            <Thead>
                                <Tr>
                                    <Th>
                                        Posição
                                    </Th>
                                    <Th>Usuário</Th>
                                    {isWideVersion && <Th>Move Cash</Th>}
                                    {/* <Th width='8'></Th> */}
                                </Tr>
                            </Thead>
                            <Tbody>

                                <Tr>
                                    <Td>
                                        1º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        2º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        3º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        4º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        5º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        6º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        7º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        8º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        9º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        10º lugar
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Link color='pink.400' onMouseEnter={() => { }}>
                                                <Text fontWeight='bold'>Rafael Passaro</Text>
                                            </Link>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color='gray.300' ><Icon as={RiCoinsLine} />200</Text>
                                    </Td>
                                </Tr>



                            </Tbody>
                        </Table>
                    </>
                </Box>
            </Flex>
        </Flex>
    );
}