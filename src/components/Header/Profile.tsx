import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { RiCoinsLine } from "react-icons/ri";

import { useUserData } from "../../hooks/useUserData";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  const { fileDataURL, name, money } = useUserData();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300">
            <Icon as={RiCoinsLine} />
            {money}
          </Text>
        </Box>
      )}

      <Avatar src={fileDataURL} size="md" name={name} />
    </Flex>
  );
}
