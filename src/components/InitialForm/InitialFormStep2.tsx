import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";

interface InitialFormStepProps {
  handleNextStep: () => void;
}

export function InitialFormStep2({ handleNextStep }: InitialFormStepProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <VStack width="100%" spacing={8}>
      <Flex as="form" width="100%" borderRadius={8} flexDir="column">
        <SimpleGrid columns={isWideVersion ? 4 : 1} spacing={4} mb={6}>
          <Input isTransparent name="height" type="text" label="Altura" />
          <Input isTransparent name="weight" type="text" label="Peso" />
          <Input isTransparent name="genre" type="text" label="Gênero" />
          <Input isTransparent name="birthday" type="text" label="Nascimento" />
        </SimpleGrid>
        <Stack spacing={4}>
          <Select name="goal" label="Qual é o seu principal objetivo?">
            <option>Selecione...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Stack>

        <Box textAlign={"center"}>
          <Button
            type="button"
            mt="10"
            py="5"
            cursor="pointer"
            size="sm"
            fontSize="lg"
            colorScheme="pink"
            rightIcon={<Icon as={RiArrowRightLine} fontSize="20" />}
            onClick={() => {
              handleNextStep();
            }}
          >
            Avançar
          </Button>
        </Box>
      </Flex>
    </VStack>
  );
}
