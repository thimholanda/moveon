import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function ProgressBar() {
    return (
        <Flex
            flex='1'
            height='6'
            maxWidth='200'
            ml='6'
            position='relative'
        >
            <Flex
                height='1'
                width='100%'
                alignSelf='center'
                position='relative'
                bg='gray.100'
                borderRadius='full'
                overflow='hidden'
            >
                <Box
                    width='50%'
                    height='100%'
                    bg='blue.400'
                ></Box>
            </Flex>

            <Flex
                width='20px'
                height='20px'
                flexShrink='0'
                justify='center'
                align='center'
                bg='gray.100'
                fontWeight='bold'
                fontSize='sm'
                borderRadius='50%'
                position='absolute'
                right='0'
                top='50%'
                transform='translate(94%, -50%)'
            >
                <Box><Text color='gray.700'>2</Text></Box>
            </Flex>

            <Box>
                <Text
                 as='small'
                 color='blue.300'
                 position='absolute'
                 left='0'
                 bottom='-12px'
                >50%</Text>
            </Box>

            <Box>
                <Text
                 as='small'
                 color='blue.300'
                 position='absolute'
                 left='0'
                 top='-12px'
                 fontWeight='bold'
                >Level 1 | 500xp</Text>
            </Box>
        </Flex>

    )
}