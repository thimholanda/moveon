import { Box, Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { useUserData } from "../../hooks/useUserData";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import Profile from "./Profile";
import { ProgressBar } from "./ProgressBar";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const { money } = useUserData();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex as="header" w="100%" maxWidth={1480} h="50" mx="auto" mt="4" mb="10" px={6} align="center">
        {!isWideVersion && (
          <IconButton
            icon={<Icon as={RiMenuLine} />}
            variant="unstyled"
            fontSize="24"
            onClick={onOpen}
            aria-label="Open
                  Navigation"
            pt="1.5"
            mr="2"
          ></IconButton>
        )}
        <Logo />

        {/* {!!isWideVersion && <Logo />} */}

        {!!isMdVersion && <ProgressBar maxWidth="200" />}

        <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Flex>
      {!isMdVersion && (
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={4} pe={3}>
          <ProgressBar maxWidth="calc(50%)" />
          <Box mr="4" textAlign="right">
            <Text color="white">
              <Image width={"40"} height={"37"} src={"/icon-movecoins.png"} alt={"Movecoins"}></Image>
              {money}
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
}
