import {
  Button,
  Flex,
  HStack,
  Img,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signFormSchema),
  });

  const errors = formState.errors;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/initial-instructions");
  };

  return (
    <>
      <Head>
        <title>Login | Moveon</title>
      </Head>

      <HStack spacing="0">
        <Flex
          h="100vh"
          width={isWideVersion ? "30%" : "100%"}
          minWidth="320px"
          px="2"
          align="center"
          justify="center"
        >
          <VStack width="100%" maxWidth="360px" spacing={8}>
            <Flex as="div" width="100%" justifyContent="center">
              <Img maxWidth="120" src="/moveon-white.png" alt="Moveon Saúde" />
            </Flex>
            <Flex
              as="form"
              width="100%"
              bg="gray.800"
              p={8}
              borderRadius={8}
              flexDir="column"
              onSubmit={handleSubmit(handleSignIn)}
            >
              <Stack spacing={4}>
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={errors.email}
                  {...register("email")}
                />

                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                  {...register("password")}
                />
              </Stack>

              <Button
                type="submit"
                mt={6}
                size="lg"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Entrar
              </Button>
            </Flex>
          </VStack>
        </Flex>

        {isWideVersion && (
          <Flex
            flex="1"
            height="100vh"
            bgImage="url('/login.jpg')"
            bgPosition="right center"
            bgSize="cover"
          ></Flex>
        )}
      </HStack>
    </>
  );
}
