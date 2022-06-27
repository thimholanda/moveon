import { Box, Button, Flex, Heading, HStack, Icon, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine, RiNotification3Line, RiNotificationLine, RiUserAddLine } from "react-icons/ri";

import { useNotifications } from "../../hooks/useNotifications";

export function NotificationsNav() {
  const useOutsideClick = (callback) => {
    const ref: any = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);

    return ref;
  };

  const [showNotifications, setShowNotifications] = useState(false);

  const { notifications, removeNotification } = useNotifications();

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  function handleClickOutside() {
    // setShowNotifications(false);
  }

  const ref = useOutsideClick(handleClickOutside);

  function handleClick() {
    console.log("click inside");
  }

  function handleShowNotifications() {
    setShowNotifications(!showNotifications);
  }

  return (
    <Flex onClick={handleClick} ref={ref} mx={["6", "8"]} position={"relative"}>
      <Flex
        as={"button"}
        bg={showNotifications ? "gray.100" : "gray.700"}
        position={"relative"}
        w={"40px"}
        h={"40px"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"full"}
        color={showNotifications ? "pink.500" : "gray.300"}
        borderColor="gray.700"
        onClick={handleShowNotifications}
      >
        <Icon as={RiNotification3Line} fontSize="20" />

        {notifications.length > 0 && (
          <Flex
            textAlign={"center"}
            justifyContent={"center"}
            color={"white"}
            borderRadius={"full"}
            w={"15px"}
            h={"15px"}
            bg={"pink.500"}
            top={"-3px"}
            right={"-3px"}
            position={"absolute"}
            fontSize={"10"}
            fontWeight={"bold"}
            lineHeight={"15px"}
          >
            <Text>{notifications.length}</Text>
          </Flex>
        )}
      </Flex>
      {showNotifications && (
        <VStack
          spacing={5}
          overflowY={"scroll"}
          bg={"gray.50"}
          top={"55px"}
          borderRadius={"10"}
          right={["-75px", "0"]}
          w={"300px"}
          max-height={"80vh"}
          position={"absolute"}
          zIndex={"tooltip"}
          justifyContent={"left"}
          alignItems={"left"}
          p={"2"}
          textAlign={"left"}
          shadow={"base"}
        >
          <Heading as={"h2"} size={"md"} mb={"1"} color={"gray.900"}>
            Notificações
          </Heading>
          {notifications.length > 0 &&
            notifications.map((notification) => (
              <HStack key={notification.id}>
                <Image
                  boxSize={"50px"}
                  alt={"Move On"}
                  src={"/icon-moveon.png"}
                ></Image>
                <Heading fontSize={"md"} color={"gray.500"} as={"h3"}>
                  {notification.title}
                </Heading>
                <IconButton
                  fontSize={"3xl"}
                  borderRadius={"full"}
                  _hover={{ background: "gray.100" }}
                  bg={"transparent"}
                  color={"blue.300"}
                  aria-label="deletar notificação"
                  icon={<RiCloseCircleLine />}
                  onClick={() => {
                    removeNotification(notification.id);
                  }}
                />
              </HStack>
            ))}
          {notifications.length === 0 && (
            <Heading
              fontSize={"md"}
              fontWeight={"normal"}
              color={"gray.500"}
              as={"h3"}
            >
              Você não tem nenhuma notificação.
            </Heading>
          )}
        </VStack>
      )}
    </Flex>
  );
}
