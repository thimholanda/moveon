import { Box, Button, Flex, HStack, Icon, SimpleGrid, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";
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
          <Select name="genre" label="Gênero">
            <option>Selecione...</option>
            <option value="1">Masculino</option>
            <option value="2">Feminino</option>
            <option value="3">Outros</option>
            <option value="4">Prefiro não dizer</option>
          </Select>
          <Input isTransparent name="birthday" type="text" label="Nascimento" />
        </SimpleGrid>
        <Stack spacing={4}>
          <Select name="goal" label="Qual é o seu principal objetivo?">
            <option>Selecione...</option>
            <option value="1">Emagrecimento</option>
            <option value="2">Ganho de massa muscular</option>
            <option value="3">Melhora da saúde mental</option>
            <option value="4">Qualidade de vida</option>
          </Select>
        </Stack>

        <Box textAlign={"center"}>
          <Button
            type="button"
            mt="5"
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
