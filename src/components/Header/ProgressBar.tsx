import { FlexProps } from "@chakra-ui/core";
import { Box, ComponentWithAs, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { useUserData } from "../../hooks/useUserData";

interface ProgressBarProps {
  maxWidth: string;
  margin?: string;
}

export const ProgressBar = ({ maxWidth, margin }: ProgressBarProps) => {
  const { levelPoints, level, experiencePoints } = useUserData();
  const [levelPercent, setLevelPercent] = useState(0);
  const totalLevelPoints = 250;

  useEffect(() => {
    const newLevelpercent = (levelPoints / totalLevelPoints) * 100;
    setLevelPercent(Number(newLevelpercent));
  }, [levelPoints, levelPercent]);

  return (
    <Flex flex="1" height="6" maxWidth={maxWidth} ml="6" position="relative" margin={margin}>
      <Flex height="1" width="100%" alignSelf="center" position="relative" bg="gray.100" borderRadius="full" overflow="hidden">
        <Box width={`${levelPercent}%`} height="100%" bg="blue.400"></Box>
      </Flex>

      <Flex
        width="20px"
        height="20px"
        // flexShrink="0"
        justify="center"
        align="center"
        bg="gray.100"
        fontWeight="bold"
        fontSize="sm"
        borderRadius="50%"
        position="absolute"
        right="0"
        top="50%"
        transform="translate(94%, -50%)"
      >
        <Box>
          <Text color="gray.700">{level}</Text>
        </Box>
      </Flex>

      <Box>
        <Text as="small" color="blue.300" position="absolute" left="0" bottom="-12px">
          {levelPercent}%
        </Text>
      </Box>

      <Box>
        <Text as="small" color="blue.300" position="absolute" left="0" top="-12px" fontWeight="bold">
          Level {level} | {experiencePoints}xp
        </Text>
      </Box>
    </Flex>
  );
};
