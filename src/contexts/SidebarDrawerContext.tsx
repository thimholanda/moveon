import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps{
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;


const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}:SidebarDrawerProviderProps){

    const disclousure = useDisclosure();
    const router = useRouter();

    useEffect(()=> {
        disclousure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider value={disclousure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);

