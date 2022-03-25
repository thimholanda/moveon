import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiFireLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Workouts() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex direction='column' h='100vh'>

            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>

                <Sidebar />

                <Box flex='1' w='100%' maxWidth={1480}>
                    <Heading mb='8' size='lg' fontWeight='normal'>Treinos</Heading>

                    <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={4}>

                        <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                            <Box position='relative' mb='3' borderRadius='8' overflow='hidden'>
                                <Icon position='absolute' top='6' left='6' as={RiPlayCircleLine} fontSize='40' />
                                <img src="/treino-mobilidade-iniciante.jpg" alt="Mobilidade Iniciante" />
                            </Box>
                            <Flex justifyContent='space-between'>

                                <HStack color='gray.200'>
                                    <Text as='small' fontWeight='bold'>Mobilidade</Text>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' as={RiTimeLine} />
                                        <Text as='small'>5 min.</Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' color='orange.400' as={RiFireLine} />
                                        <Text as='small' color='orange.400'>120 cal</Text>
                                    </Flex>
                                </HStack>

                                <HStack>
                                    <Text as='small' fontWeight='bold' color='green.400'>50%</Text>
                                    <Flex
                                        flex='1'
                                        height='1'
                                        width='20'
                                        bg='gray.100'
                                        borderRadius='full'
                                        overflow='hidden'
                                    >
                                        <Box
                                            width='50%'
                                            height='100%'
                                            bg='green.400'
                                        ></Box>
                                    </Flex>
                                </HStack>

                            </Flex>

                        </Box>

                        <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                            <Box position='relative' mb='3' borderRadius='8' overflow='hidden'>
                                <Icon position='absolute' top='6' left='6' as={RiPlayCircleLine} fontSize='40' />
                                <img src="/treino-mobilidade-iniciante.jpg" alt="Mobilidade Iniciante" />
                            </Box>
                            <Flex justifyContent='space-between'>

                                <HStack color='gray.200'>
                                    <Text as='small' fontWeight='bold'>Mobilidade</Text>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' as={RiTimeLine} />
                                        <Text as='small'>5 min.</Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' color='orange.400' as={RiFireLine} />
                                        <Text as='small' color='orange.400'>120 cal</Text>
                                    </Flex>
                                </HStack>

                                <HStack>
                                    <Text as='small' fontWeight='bold' color='green.400'>50%</Text>
                                    <Flex
                                        flex='1'
                                        height='1'
                                        width='20'
                                        bg='gray.100'
                                        borderRadius='full'
                                        overflow='hidden'
                                    >
                                        <Box
                                            width='50%'
                                            height='100%'
                                            bg='green.400'
                                        ></Box>
                                    </Flex>
                                </HStack>

                            </Flex>

                        </Box>

                        <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                            <Box position='relative' mb='3' borderRadius='8' overflow='hidden'>
                                <Icon position='absolute' top='6' left='6' as={RiPlayCircleLine} fontSize='40' />
                                <img src="/treino-mobilidade-iniciante.jpg" alt="Mobilidade Iniciante" />
                            </Box>
                            <Flex justifyContent='space-between'>

                                <HStack color='gray.200'>
                                    <Text as='small' fontWeight='bold'>Mobilidade</Text>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' as={RiTimeLine} />
                                        <Text as='small'>5 min.</Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' color='orange.400' as={RiFireLine} />
                                        <Text as='small' color='orange.400'>120 cal</Text>
                                    </Flex>
                                </HStack>

                                <HStack>
                                    <Text as='small' fontWeight='bold' color='green.400'>50%</Text>
                                    <Flex
                                        flex='1'
                                        height='1'
                                        width='20'
                                        bg='gray.100'
                                        borderRadius='full'
                                        overflow='hidden'
                                    >
                                        <Box
                                            width='50%'
                                            height='100%'
                                            bg='green.400'
                                        ></Box>
                                    </Flex>
                                </HStack>

                            </Flex>

                        </Box>

                        <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                            <Box position='relative' mb='3' borderRadius='8' overflow='hidden'>
                                <Icon position='absolute' top='6' left='6' as={RiPlayCircleLine} fontSize='40' />
                                <img src="/treino-mobilidade-iniciante.jpg" alt="Mobilidade Iniciante" />
                            </Box>
                            <Flex justifyContent='space-between'>

                                <HStack color='gray.200'>
                                    <Text as='small' fontWeight='bold'>Mobilidade</Text>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' as={RiTimeLine} />
                                        <Text as='small'>5 min.</Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Icon mr='1' color='orange.400' as={RiFireLine} />
                                        <Text as='small' color='orange.400'>120 cal</Text>
                                    </Flex>
                                </HStack>

                                <HStack>
                                    <Text as='small' fontWeight='bold' color='green.400'>50%</Text>
                                    <Flex
                                        flex='1'
                                        height='1'
                                        width='20'
                                        bg='gray.100'
                                        borderRadius='full'
                                        overflow='hidden'
                                    >
                                        <Box
                                            width='50%'
                                            height='100%'
                                            bg='green.400'
                                        ></Box>
                                    </Flex>
                                </HStack>

                            </Flex>

                        </Box>

                    </SimpleGrid>

                </Box>
            </Flex>
        </Flex>
    );
}