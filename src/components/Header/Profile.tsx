import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { RiCoinsLine } from "react-icons/ri";


interface ProfileProps{
    showProfileData?: boolean;
}

export default function Profile({showProfileData = true}:ProfileProps) {
    return (
        <Flex
            align='center'
        >
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                <Text>Rafael Passaro</Text>
                <Text color='gray.300' ><Icon as={RiCoinsLine}/>200</Text>
            </Box>)
            }
            

            <Avatar size='md' name="Rafael Passaro" />

        </Flex>

    );
}