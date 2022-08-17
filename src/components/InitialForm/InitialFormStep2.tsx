import { Box, Button, Flex, HStack, Icon, SimpleGrid, Stack, useBreakpointValue, VStack } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

import { Input } from "../Form/Input";
import { Option } from "../Form/Option";
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
            <Option value="">Selecione...</Option>
            <Option value="1">Feminino</Option>
            <Option value="2">Masculino</Option>
            <Option value="3">Não Binário</Option>
            <Option value="4">Prefiro não responder</Option>
          </Select>
          <Input isTransparent name="birthday" type="text" label="Nascimento" />
        </SimpleGrid>
        <Stack spacing={4}>
          <Select name="goal" label="Qual é o seu principal objetivo?">
            <Option value="">Selecione...</Option>
            <Option value="1">Emagrecimento</Option>
            <Option value="2">Ganho de massa muscular</Option>
            <Option value="3">Melhora da saúde mental</Option>
            <Option value="4">Qualidade de vida</Option>
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
