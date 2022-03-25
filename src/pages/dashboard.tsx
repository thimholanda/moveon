import NextLink from "next/link";
import { Box, Button, Flex, HStack, Icon, Img, SimpleGrid, Text, theme, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Ri24HoursLine, RiAddLine, RiBarChartBoxLine, RiFileList3Line, RiFireLine, RiGift2Line, RiHandHeartLine, RiLiveLine, RiPlayCircleLine, RiTimeLine } from "react-icons/ri";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Link from "next/link";


export default function Dashboard() {

    return (

        <Flex direction='column' h='100vh'>

            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>

                <Sidebar />

                <Box flex='1' w='100%' maxWidth={1480}>
                    <VStack spacing='4'>

                        <SimpleGrid w='100%' gap='4' minChildWidth='320px' alignItems='flex-start'>

                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                                <Text fontSize='lg' mb='5'>Pronto? Então, <strong>let{`'`}s move on!</strong></Text>
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

                            <Link href='/blog/article'>
                                <a>
                                    <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                                        <Text fontSize='lg' mb='5'>Última matéria do blog</Text>
                                        <Box mb='3' borderRadius='8' overflow='hidden'>
                                            <img src="/yoga-meditacao.jpg" alt="Yoga e meditacao" />
                                        </Box>
                                        <Flex color='gray.200' justifyContent='space-between'>
                                            <Text as='h2' fontWeight='bold'>Praticar yoga e meditação</Text>
                                            <Flex alignItems='center'>
                                                <Icon mr='1' as={RiTimeLine} />
                                                <Text as='small'>3 min.</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </a>
                            </Link>


                        </SimpleGrid>

                        <SimpleGrid w='100%' gap='4' minChildWidth='320px' alignItems='flex-start'>

                            <Box position='relative' h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                                <Text fontSize='lg' mb='5'>Histórico</Text>

                                <SimpleGrid columns={2} spacing={4}>

                                    <Flex alignItems='center' justifyContent='space-between' bg='gray.900' height='80px' borderRadius='8' p='4'>
                                        <Flex direction='column'>
                                            <Icon as={RiBarChartBoxLine} color='gray.400' fontSize='20' />
                                            <Text color='gray.400'>Ranking (março)</Text>
                                        </Flex>
                                        <Text color='gray.200' fontWeight='bold' fontSize='4xl'>1º</Text>
                                    </Flex>

                                    <Flex alignItems='center' justifyContent='space-between' bg='gray.900' height='80px' borderRadius='8' p='4'>
                                        <Flex direction='column'>
                                            <Icon as={RiLiveLine} color='gray.400' fontSize='20' />
                                            <Text color='gray.400'>Treinos assistidos</Text>
                                        </Flex>
                                        <Text color='gray.200' fontWeight='bold' fontSize='4xl'>4</Text>
                                    </Flex>

                                    <Flex alignItems='center' justifyContent='space-between' bg='gray.900' height='80px' borderRadius='8' p='4'>
                                        <Flex direction='column'>
                                            <Icon as={RiFileList3Line} color='gray.400' fontSize='20' />
                                            <Text color='gray.400'>Matérias lidas</Text>
                                        </Flex>
                                        <Text color='gray.200' fontWeight='bold' fontSize='4xl'>10</Text>
                                    </Flex>

                                    <Flex alignItems='center' justifyContent='space-between' bg='gray.900' height='80px' borderRadius='8' p='4'>
                                        <Flex direction='column'>
                                            <Icon as={RiHandHeartLine} color='gray.400' fontSize='20' />
                                            <Text color='gray.400'>Árvores plantadas</Text>
                                        </Flex>
                                        <Text color='gray.200' fontWeight='bold' fontSize='4xl'>2</Text>
                                    </Flex>

                                </SimpleGrid>

                                <Box
                                    position='absolute'
                                    top='6'
                                    right='8'
                                >
                                    <NextLink href={'/dashboard'} passHref>
                                        <Button
                                            as='a'
                                            cursor='pointer'
                                            size='sm'
                                            fontSize='small'
                                            colorScheme='pink'
                                            leftIcon={<Icon
                                                as={RiGift2Line} fontSize='20' />}>Resgatar prêmios
                                        </Button>
                                    </NextLink>
                                </Box>

                            </Box>

                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>
                                <Text fontSize='lg' mb='5'>Minhas conquistas (1)</Text>
                                <HStack>
                                    <Flex
                                        width='150px'
                                        height='150px'
                                        bg='gray.900'
                                        borderRadius='8'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        <Img display='block' width='80%' src="/insignia.png" alt="Insígnias" />
                                    </Flex>
                                    
                                </HStack>
                            </Box>

                        </SimpleGrid>
                    </VStack>
                </Box>



            </Flex>

        </Flex>
    );
}