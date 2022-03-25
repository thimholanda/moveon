import { Box, Img, Text } from "@chakra-ui/react";

export function Logo() {
    return (

        <Box
            width={64}
        >
            <Img width='130px' src="/moveon-white-h.png" />
        </Box>


        // <Text
        //     fontSize={['2xl', '3xl']}
        //     fontWeight='bold'
        //     letterSpacing='tight'
        //     w={64}
        // >
        //     dashgo
        //     <Text as='span' ml={1} color='pink.500'>.</Text>
        // </Text>
    );
}