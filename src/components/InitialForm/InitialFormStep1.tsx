import { Box, Button, Flex, Icon, Stack, VStack } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

import { useUserData } from "../../hooks/useUserData";
import { Input } from "../Form/Input";
import { Select } from "../Form/Select";

interface InitialFormStepProps {
  handleNextStep: () => void;
}

export function InitialFormStep1({ handleNextStep }: InitialFormStepProps) {
  const { setName } = useUserData();
  return (
    <VStack width="100%" spacing={8}>
      <Flex as="form" width="100%" borderRadius={8} flexDir="column">
        <Stack spacing={4}>
          <Input
            isTransparent
            name="name"
            type="text"
            label="Qual é o seu nome?"
            onBlur={(e) => setName(e.target.value)}
          />
          <Select name="interests" label="O que você mais gosta de fazer?">
            <option>Selecione...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            name="sports-activity"
            label="Você já praticou ou pratica algum esporte?"
          >
            <option>Selecione...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select name="favorite-sport" label="Qual é o seu esporte favorito?">
            <option>Selecione...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          {/* <Input
            isTransparent
            name="email"
            type="email"
            label="O que você mais gosta de fazer?"
          />

          <Input
            isTransparent
            name="password"
            type="password"
            label="Senha"
          /> */}
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

        {/* <Box textAlign={"center"}>
          <NextLink href={"/initial-form"} passHref>
            <Button
              as="a"
              mt="10"
              py="5"
              cursor="pointer"
              size="sm"
              fontSize="lg"
              colorScheme="pink"
              rightIcon={<Icon as={RiArrowRightLine} fontSize="20" />}
            >
              Começar
            </Button>
          </NextLink>
        </Box> */}
      </Flex>
    </VStack>
  );
}
