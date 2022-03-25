import { Box, Flex, Heading, Icon, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiTimeLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Blog() {

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
                    <Heading mb='8' size='lg' fontWeight='normal'>Blog</Heading>

                    <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={4}>

                        <Link href='/blog/article'>
                            <a>
                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>

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

                        <Link href='/blog/article'>
                            <a>
                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>

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

                        <Link href='/blog/article'>
                            <a>
                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>

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

                        <Link href='/blog/article'>
                            <a>
                            <Box h='100%' p={['6', '8']} bg='gray.800' borderRadius='8' pb='4'>

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

                </Box>
            </Flex>
        </Flex>
    );
}