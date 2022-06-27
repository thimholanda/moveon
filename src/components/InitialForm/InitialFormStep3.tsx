import {
  Box,
  Button,
  Input as ChakraInput,
  Checkbox,
  Flex,
  FormLabel,
  HStack,
  Icon,
  InputGroup,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiUserAddLine,
  RiUserFollowLine,
} from "react-icons/ri";

import { Input } from "../Form/Input";

interface InitialFormStepProps {
  handleNextStep: () => void;
  handleSubmitFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileDataURL: string;
}

export function InitialFormStep3({
  handleNextStep,
  handleSubmitFile,
  fileDataURL,
}: InitialFormStepProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <VStack width="100%" spacing={8}>
      <Flex as="form" width="100%" borderRadius={8} flexDir="column">
        <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={4} mb={6}>
          <Input isTransparent name="instagram" type="text" label="Instagram" />
          <Input isTransparent name="linkedin" type="text" label="LinkedIn" />
        </SimpleGrid>
        <VStack spacing={4} alignItems={"flex-start"} mb={"6"}>
          <Checkbox alignItems={"flex-start"} defaultChecked>
            <Text mt={"-4px"}>
              Permito que minhas redes sociais fiquem visíveis a outros usuários
            </Text>
          </Checkbox>
        </VStack>
        <VStack spacing={4} alignItems={"center"}>
          <Text
            as="h2"
            fontWeight={"bold"}
            mt={"5"}
            fontSize={"xl"}
            textAlign={"center"}
          >
            Defina sua imagem de perfil
          </Text>

          <HStack>
            <InputGroup justifyContent={"center"}>
              <ChakraInput
                id="file-input"
                type="file"
                accept={"image/*"}
                onChange={handleSubmitFile}
                hidden
              />
              <>
                <FormLabel htmlFor={"file-input"}>
                  <Button
                    as="div"
                    w={"100px"}
                    h={"100px"}
                    p={0}
                    borderRadius={"50px"}
                    cursor={"pointer"}
                  >
                    {!!fileDataURL ? (
                      <ChakraImage
                        src={fileDataURL}
                        borderRadius={"full"}
                        boxSize={100}
                        objectFit={"cover"}
                      />
                    ) : (
                      <Icon
                        color={"gray.400"}
                        fontSize={50}
                        as={RiUserAddLine}
                      />
                    )}
                  </Button>
                </FormLabel>
              </>
            </InputGroup>
          </HStack>
        </VStack>
        <Box textAlign={"center"}>
          <Button
            type="button"
            mt="10"
            py="5"
            cursor="pointer"
            size="sm"
            fontSize="lg"
            colorScheme="pink"
            rightIcon={<Icon as={RiCheckLine} fontSize="20" />}
            onClick={() => {
              handleNextStep();
            }}
          >
            Concluir
          </Button>
        </Box>
      </Flex>
    </VStack>
  );
}
