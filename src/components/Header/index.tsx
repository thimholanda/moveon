import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import Profile from "./Profile";
import { ProgressBar } from "./ProgressBar";
import { SearchBox } from "./SearchBox";

export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false, 
        lg: true,
    });

    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h='50'
            mx='auto'
            mt='4'
            mb='10'
            px={6}
            align='center'
        >
            { !isWideVersion && (
                <IconButton
                  icon={<Icon
                  as={RiMenuLine}/>}
                  variant='unstyled'
                  fontSize='24'
                  onClick={onOpen}
                  aria-label='Open
                  Navigation'
                  pt='1.5'
                  mr='2'></IconButton>
            )}
            <Logo />

            {isWideVersion && <ProgressBar />}

            
            

            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />

            </Flex>

        </Flex>
    );
}