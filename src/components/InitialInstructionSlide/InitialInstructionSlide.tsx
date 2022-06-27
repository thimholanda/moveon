import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

interface InitialInstructionsSlideProps {
  desktopImage: string;
  mobileImage: string;
  children: ReactNode;
}

export function InitialInstructionSlide({
  desktopImage,
  mobileImage,
  children,
}: InitialInstructionsSlideProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Box
      className="slide-content"
      display={"flex !important"}
      flexDirection={"column"}
      h={"100%"}
      w={"100%"}
      bgColor="purple.200"
      bgImage={!!isWideVersion ? desktopImage : mobileImage}
      bgSize="cover"
      bgPosition="left"
      alignItems={"center"}
      justifyContent={"flex-end !important"}
    >
      {/* Instruction content */}
      <Flex
        flexDirection={"column"}
        width={"90%"}
        maxWidth={"900px"}
        className="instruction-content"
        alignItems={"center"}
        marginBottom={"100px !important"}
      >
        {/* Logo */}
        <Flex
          className="logo"
          flexDirection={"column"}
          w={100}
          height={100}
          bg={"white"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={10}
          transform={"translateY(50%)"}
        >
          <Box>
            <Image
              src={"/moveon-saude.jpg"}
              alt="MoveOn Saúde"
              width={68}
              height={78}
            />
          </Box>
        </Flex>
        {/* Content */}
        <Flex
          className="content"
          flexDirection={"column"}
          width={"100%"}
          bg={"linear-gradient(rgba(24,27,35, .8), rgba(24,27,35, .5))"}
          borderRadius={10}
          alignItems={"center"}
          padding={["70px 20px 50px 20px", "70px 50px 50px 50px"]}
        >
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}
