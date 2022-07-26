import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
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
          <Text color="white">
            <Image
              width={"40"}
              height={"37"}
              src={"/icon-movecoins.png"}
              alt={"Movecoins"}
            ></Image>
            {/* <Icon color={"white"} as={RiCoinsLine} /> */}
            {money}
          </Text>
        </Box>
      )}
      <Text mx={2}>{name}</Text>
      <Avatar src={fileDataURL} size="md" name={name} />
    </Flex>
  );
}
