import { Stack } from "@chakra-ui/react";
import { RiBarChartBoxLine, RiContactsLine, RiDashboardLine, RiFileList3Line, RiGitMergeLine, RiInputMethodLine, RiLiveLine, RiQuestionnaireLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>

            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
                <NavLink icon={RiLiveLine} href='/workouts'>Treinos</NavLink>
                <NavLink icon={RiBarChartBoxLine} href='/ranking'>Ranking</NavLink>
                <NavLink icon={RiFileList3Line} href='/blog'>Blog</NavLink>
            </NavSection>

            <NavSection title="CONFIGURAÇÕES">
                <NavLink icon={RiContactsLine} href='/profile'>Perfil</NavLink>
                <NavLink icon={RiQuestionnaireLine} href='/help'>Ajuda</NavLink>
            </NavSection>
        </Stack>
    );
}