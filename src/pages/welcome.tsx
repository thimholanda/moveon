import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { InitialFormStep1 } from "../components/InitialForm/InitialFormStep1";
import { InitialFormStep2 } from "../components/InitialForm/InitialFormStep2";
import { InitialFormStep3 } from "../components/InitialForm/InitialFormStep3";
import { InitialFormSteps } from "../components/InitialForm/InitialFormSteps";
import { useUserData } from "../hooks/useUserData";

export default function Welcome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const { fileDataURL, createFileDataURL } = useUserData();
  const router = useRouter();

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  useEffect(() => {
    if (step > 3) router.push("/dashboard");
  }, [step, router]);

  useEffect(() => {
    let fileReader: FileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          createFileDataURL(result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file, createFileDataURL]);

  function handleNextStep() {
    setStep(step + 1);
  }

  function handleSubmitFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match(imageMimeType)) {
        alert("file not suported");
        return;
      }
    }

    setFile(file);
  }

  return (
    <>
      <Box
        position={"fixed"}
        bgImage={
          !!isWideVersion
            ? "/moveon-exercicio.jpg"
            : "/moveon-exercicio-mobile.jpg"
        }
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"right"}
        left={0}
        right={0}
        top={0}
        bottom={0}
      ></Box>

      <Flex
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        position={"relative"}
        transform={"translateY(-20px)"}
      >
        <Flex
          className="logo"
          flexDirection={"column"}
          w={100}
          h={100}
          bg={"white"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={10}
          transform={"translateY(50%)"}
        >
          <Box>
            <Image
              src={"/moveon-saude.jpg"}
              alt="MoveOn Saúde"
              width={68}
              height={78}
            />
          </Box>
        </Flex>

        <Flex
          className="content"
          flexDirection={"column"}
          width={"90%"}
          maxWidth={700}
          bg={"linear-gradient(rgba(24,27,35, .8), rgba(24,27,35, .5))"}
          borderRadius={10}
          alignItems={"center"}
          padding={["70px 20px 50px 20px", "70px 50px 30px 50px"]}
        >
          <InitialFormSteps step={step} />

          {step == 1 && (
            <InitialFormStep1 handleNextStep={() => handleNextStep()} />
          )}

          {step == 2 && (
            <InitialFormStep2 handleNextStep={() => handleNextStep()} />
          )}

          {step == 3 && (
            <InitialFormStep3
              fileDataURL={fileDataURL}
              handleSubmitFile={handleSubmitFile}
              handleNextStep={handleNextStep}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
}
