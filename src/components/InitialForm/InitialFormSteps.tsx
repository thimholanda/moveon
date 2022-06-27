import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface InitialFormStepsProps {
  step: number;
}

export function InitialFormSteps({ step }: InitialFormStepsProps) {
  const [colorStep2, setColorStep2] = useState("white");
  const [colorStep3, setColorStep3] = useState("white");
  const activeColor = "#7ac6d5";

  useEffect(() => {
    switch (step) {
      case 2:
        setColorStep2(activeColor);
        break;
      case 3:
        setColorStep3(activeColor);
        break;
    }
  }, [step]);

  return (
    <>
      <Text
        as="h2"
        fontWeight={"bold"}
        mt={"2"}
        fontSize={"xl"}
        textAlign={"center"}
      >
        Conte mais sobre você.
      </Text>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        mt={"15px"}
        mb={"35px"}
      >
        <Flex
          w={50}
          height={50}
          bgColor={"blue.500"}
          borderRadius={25}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box as="span" fontSize={"2xl"} fontWeight="bold">
            1
          </Box>
        </Flex>
        <Box
          w={"40px"}
          h={"1px"}
          border={"1px solid black"}
          borderColor={colorStep2}
        ></Box>
        <Flex
          w={50}
          height={50}
          bgColor={colorStep2 != "white" ? colorStep2 : "transparent"}
          border={`2px solid ${colorStep2}`}
          borderRadius={25}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box as="span" fontSize={"2xl"} fontWeight="bold">
            2
          </Box>
        </Flex>
        <Box
          w={"40px"}
          h={"1px"}
          border={"1px solid black"}
          borderColor={colorStep3}
        ></Box>
        <Flex
          w={50}
          height={50}
          bgColor={colorStep3 != "white" ? colorStep3 : "transparent"}
          border={`2px solid ${colorStep3}`}
          borderRadius={25}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box as="span" fontSize={"2xl"} fontWeight="bold">
            3
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
