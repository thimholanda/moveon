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
            <option value="">Selecione...</option>
            <option value="1">Tocar instrumentos musicais</option>
            <option value="2">Praticar esportes</option>
            <option value="3">Ler</option>
            <option value="4">Assistir filmes</option>
            <option value="5">Frequentar aulas de teatro</option>
            <option value="6">Pintar</option>
            <option value="7">Cozinhar</option>
            <option value="8">Dançar</option>
            <option value="9">Viajar</option>
            <option value="10">Escrever</option>
            <option value="11">Meditar</option>
            <option value="12">Visitar museus</option>
            <option value="13">Fotografar</option>
            <option value="14">Velejar</option>
            <option value="15">Pescar</option>
            <option value="16">Tocar DJ</option>
            <option value="17">Ir a restaurantes</option>
            <option value="18">Passear no shopping</option>
            <option value="19">Estudar</option>
          </Select>
          <Select
            name="sports-activity"
            label="Você já praticou ou pratica algum esporte?"
          >
            <option value="">Selecione...</option>
            <option value="1">Nunca pratiquei</option>
            <option value="2">Pratique, mas estou parado</option>
            <option value="3">Pratico esportes com frequencia</option>
          </Select>
          <Select name="favorite-sport" label="Qual é o seu esporte favorito?">
            <option>Selecione...</option>
            <option value="1">Tênis</option>
            <option value="2">Basquete</option>
            <option value="3">Corrida</option>
            <option value="4">Futebol</option>
            <option value="5">Ginástica</option>
            <option value="6">Natação</option>
            <option value="7">Skate</option>
            <option value="8">Surfe</option>
            <option value="9">Vôlei</option>
            <option value="10">Luta</option>
            <option value="11">Musculação </option>
            <option value="12">Triathlon</option>
            <option value="13">Outros</option>
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
