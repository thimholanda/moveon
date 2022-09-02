import { Box, Button, ChakraProvider, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect } from "react";

import { GlobalModal } from "../components/Modal/GlobalModal";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { UseEvaluationsProvider } from "../hooks/useEvaluations";
import { UseHistoryProvider } from "../hooks/useHistory";
import { useModal, UseModalProvider } from "../hooks/useModal";
import { NotificationsProvider, useNotifications } from "../hooks/useNotifications";
import { UserDataProvider } from "../hooks/useUserData";
import { WorkoutsProvider } from "../hooks/useWorkouts";
import { theme } from "../styles/theme";

import "../styles/global.sass";

function MyApp({ Component, pageProps }: AppProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalProps = { isOpen, onOpen, onClose };

  return (
    <SidebarDrawerProvider>
      <ChakraProvider resetCSS theme={theme}>
        <UseModalProvider {...modalProps}>
          <NotificationsProvider>
            <UseHistoryProvider>
              <UserDataProvider>
                <WorkoutsProvider>
                  <UseEvaluationsProvider>
                    <GlobalModal
                      isOpen={isOpen}
                      onClose={onClose}
                    ></GlobalModal>
                    <Component {...pageProps} />
                  </UseEvaluationsProvider>
                </WorkoutsProvider>
              </UserDataProvider>
            </UseHistoryProvider>
          </NotificationsProvider>
        </UseModalProvider>
      </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;
