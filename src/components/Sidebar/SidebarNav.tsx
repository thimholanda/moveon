import { Stack } from "@chakra-ui/react";
import {
  RiBarChartBoxLine,
  RiContactsLine,
  RiDashboardLine,
  RiFileList3Line,
  RiGift2Line,
  RiGitMergeLine,
  RiInputMethodLine,
  RiLineChartLine,
  RiLiveLine,
  RiMapPinTimeLine,
  RiMedal2Fill,
  RiMovie2Line,
  RiMovieLine,
  RiProfileLine,
  RiQuestionnaireLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiMovieLine} href="/workouts">
          Treinos
        </NavLink>
        {/* <NavLink icon={RiLiveLine} href="/lives">
          Treino ao vivo
        </NavLink> */}
        <NavLink icon={RiBarChartBoxLine} href="/ranking">
          Ranking
        </NavLink>
        <NavLink icon={RiGift2Line} href="/awards">
          Meus prêmios
        </NavLink>
        {/* <NavLink icon={RiMedal2Fill} href="/achievements">
          Minhas conquistas
        </NavLink> */}
        <NavLink icon={RiLineChartLine} href="/evaluations">
          Minhas avaliações
        </NavLink>
        <NavLink icon={RiMapPinTimeLine} href="/history">
          Histórico
        </NavLink>
        <NavLink icon={RiFileList3Line} href="/blog">
          Blog
        </NavLink>
        {/* <NavLink icon={RiProfileLine} href="/about">
          Sobre a Move On
        </NavLink> */}
      </NavSection>

      {/* <NavSection title="CONFIGURAÇÕES">
        <NavLink icon={RiContactsLine} href="/profile">
          Perfil
        </NavLink>
        <NavLink icon={RiQuestionnaireLine} href="/help">
          Ajuda
        </NavLink>
      </NavSection> */}
    </Stack>
  );
}
