import Link from "next/link";

import { Box, Flex, Heading, Icon, ListItem, SimpleGrid, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { RiArrowRightSLine, RiTimeLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Article() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex direction='column' h='100vh'>

            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6' pb='6'>

                <Sidebar />

                <Box flex='1' w='100%' maxWidth={1480}>
                    <Heading mb='8' size='lg' fontWeight='normal'><Link href='/blog' ><a><Box as='span' color='pink.400'>Blog</Box></a></Link> <Icon display='inline-block' pt='3' as={RiArrowRightSLine} />Praticar yoga e meditação</Heading>

                    <Box p={['4', '8']} bg='gray.800' borderRadius='8' pb='4'>

                        <Box mb='3' borderRadius='8' overflow='hidden'>
                            <img width='100%' src="/yoga-meditacao.jpg" alt="Yoga e meditacao" />
                        </Box>
                        <Flex color='gray.200' justifyContent='space-between' mb='8'>
                            <Flex alignItems='center'>
                                <Icon mr='1' as={RiTimeLine} />
                                <Text as='small'>3 minutos de leitura</Text>
                            </Flex>
                        </Flex>
                        <Box>
                            <Heading as='h2' size='lg' mb='7'>Praticar yoga e meditação em tempos atuais é muito sensato</Heading>

                            <Text mb='4'>Sabemos que, bem-estar e resiliência podem ser considerados uma habilidade no ambiente de trabalho e essas práticas promovem ambos estados.</Text>

                            <Text mb='4' color='pink.400'><strong> Entre tantos outros benefícios estão:</strong></Text>

                            <UnorderedList mb='4'>
                                <ListItem>
                                    Diminuição, controle e gerenciamento do estresse
                                </ListItem>
                                <ListItem>Prevenção do esgotamento mental.</ListItem>

                                <ListItem>Maior clareza mental e melhora na memória.</ListItem>

                                <ListItem>Alivia dores de cabeça recorrentes e tensões nos ombros e coluna.</ListItem>

                                <ListItem>Melhora a qualidade do sono e das relações no trabalho e fora dele.</ListItem>
                            </UnorderedList>

                            <Text><strong>Ambas as práticas estão na nossa plataforma, pratique!</strong></Text>

                        </Box>
                    </Box>

                </Box>
            </Flex>
        </Flex>
    );
}