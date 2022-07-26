import { Box, Button, Flex, Icon, Stack, VStack } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

import { useUserData } from "../../hooks/useUserData";
import { Input } from "../Form/Input";
import { Option } from "../Form/Option";
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
            <Option value="">Selecione...</Option>
            <Option value="4">Assistir filmes</Option>
            <Option value="7">Cozinhar</Option>
            <Option value="8">Dançar</Option>
            <Option value="10">Escrever</Option>
            <Option value="19">Estudar</Option>
            <Option value="13">Fotografar</Option>
            <Option value="5">Frequentar aulas de teatro</Option>
            <Option value="17">Ir a restaurantes</Option>
            <Option value="3">Ler</Option>
            <Option value="11">Meditar</Option>
            <Option value="18">Passear no shopping</Option>
            <Option value="15">Pescar</Option>
            <Option value="6">Pintar</Option>
            <Option value="2">Praticar esportes</Option>
            <Option value="16">Tocar DJ</Option>
            <Option value="1">Tocar instrumentos musicais</Option>
            <Option value="14">Velejar</Option>
            <Option value="9">Viajar</Option>
            <Option value="12">Visitar museus</Option>
          </Select>
          <Select
            name="sports-activity"
            label="Você já praticou ou pratica algum esporte?"
          >
            <Option value="">Selecione...</Option>
            <Option value="1">Nunca pratiquei</Option>
            <Option value="2">Pratiquei, mas estou parado</Option>
            <Option value="3">Pratico esportes com frequência</Option>
          </Select>
          <Select name="favorite-sport" label="Qual é o seu esporte favorito?">
            <Option value="">Selecione...</Option>
            <Option value="2">Basquete</Option>
            <Option value="3">Corrida</Option>
            <Option value="4">Futebol</Option>
            <Option value="5">Ginástica</Option>
            <Option value="10">Luta</Option>
            <Option value="11">Musculação </Option>
            <Option value="6">Natação</Option>
            <Option value="7">Skate</Option>
            <Option value="8">Surfe</Option>
            <Option value="1">Tênis</Option>
            <Option value="12">Triathlon</Option>
            <Option value="9">Vôlei</Option>
            <Option value="13">Outros</Option>
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
