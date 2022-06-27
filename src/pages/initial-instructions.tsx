import { Box, Button, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  RiArrowLeftSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Slider from "react-slick";

import { InitialInstructionSlide } from "../components/InitialInstructionSlide/InitialInstructionSlide";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { InitialInstructionSlideArrow } from "../components/InitialInstructionSlide/InitialInstructionSlideArrow";

export default function Instructions() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <InitialInstructionSlideArrow position="left" icon={RiArrowLeftSLine} />
    ),
    nextArrow: (
      <InitialInstructionSlideArrow position="right" icon={RiArrowRightSLine} />
    ),
    afterChange: (current, next) => console.log(next),
  };

  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>

      <Slider className="initial-slider" {...settings}>
        <InitialInstructionSlide
          desktopImage="/moveon-meditacao.jpg"
          mobileImage="/moveon-meditacao-mobile.jpg"
        >
          <Text fontSize={["md", "lg"]} textAlign={["center", "left"]}>
            A Move On traz uma metodologia inovadora e exclusiva para você
            revolucionar o seu estilo de vida com a aquisição de hábitos
            saudáveis. Atividades físicas, meditações, leitura, respiração,
            aulas ao vivo, dicas nutricionais e diversos outros conteúdos
            relevantes associados ao bem-estar físico e mental, tudo em um só
            lugar.
          </Text>
        </InitialInstructionSlide>
        <InitialInstructionSlide
          desktopImage="/moveon-alongamento.jpg"
          mobileImage="/moveon-alongamento-mobile.jpg"
        >
          <Text fontSize={["md", "lg"]} textAlign={["center", "left"]}>
            Para facilitar o caminho rumo a uma vida mais saudável, utilizamos a
            gamificação (estímulo por meio de jogos) e promovemos competições
            amistosas nas quais os participantes que obtiverem melhores
            resultados serão premiados. Criamos um ambiente divertido e
            desafiador para que os usuários se tornem mais engajados, motivados
            e integrados.
          </Text>
        </InitialInstructionSlide>
        <InitialInstructionSlide
          desktopImage="/moveon-fitness.jpg"
          mobileImage="/moveon-fitness-mobile.jpg"
        >
          <Text fontSize={["md", "lg"]} textAlign={["center", "left"]}>
            Ao praticar as atividades, cumprir metas e receber recompensas o
            usuário poderá ainda colaborar com o meio ambiente. A Move on e a
            ONG Iniciativa verde, estão juntas no combate a crise climática e na
            preservação dos nossos mananciais.
          </Text>
          <Box>
            <NextLink href={"/welcome"} passHref>
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
          </Box>
        </InitialInstructionSlide>
      </Slider>
    </>
  );
}
