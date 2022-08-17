import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { NumberLocale } from "yup/lib/locale";

import { LevelUpModal } from "../components/Modal/LevelUpModal";
import { useHistory, UserHistory } from "./useHistory";
import { useModal } from "./useModal";
import { useNotifications } from "./useNotifications";

interface UserDataContextData {
  fileDataURL: string;
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  createFileDataURL: (url: string) => void;
  money: number;
  experiencePoints: number;
  level: number;
  levelPoints: number;
  addMoney: (value: number) => void;
  addExperiencePoints: (value: number) => void;
  trees: number;
  setTrees: React.Dispatch<SetStateAction<number>>;
  visitedBlog: boolean;
  setVisitedBlog: React.Dispatch<SetStateAction<boolean>>;
  hasAward: boolean;
  setHasAward: React.Dispatch<SetStateAction<boolean>>;
  instagram: string;
  linkedIn: string;
  setInstagram: React.Dispatch<SetStateAction<string>>;
  setLinkedIn: React.Dispatch<SetStateAction<string>>;
}

interface UserDataProviderProps {
  children: ReactNode;
}

const UserDataContext = createContext<UserDataContextData>(
  {} as UserDataContextData
);

export function UserDataProvider({ children }: UserDataProviderProps) {
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [money, setMoney] = useState(0);
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [levelPoints, setLevelPoints] = useState(0);
  const { createNotification } = useNotifications();
  const { onOpen, defineModalComponent } = useModal();
  const [trees, setTrees] = useState(0);
  const [visitedBlog, setVisitedBlog] = useState(false);
  const [hasAward, setHasAward] = useState(false);
  const { addToHistory } = useHistory();

  function createFileDataURL(url: string) {
    setFileDataURL(url);
  }

  function addMoney(value: number) {
    setMoney(money + value);
  }

  useEffect(() => {
    if (level > 1) {
      defineModalComponent(<LevelUpModal level={level} />);
      onOpen();
      createNotification(`Parabéns! Você subiu para o level ${level}`);
      const history: UserHistory = {
        action: `Subiu para o level: ${level}`,
      };
      addToHistory(history);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  function addExperiencePoints(value: number) {
    setExperiencePoints(experiencePoints + value);

    let newLevelPoints = levelPoints + value;

    if (newLevelPoints >= 250) {
      setLevel(level + 1);
      setLevelPoints(0);
    } else {
      setLevelPoints(levelPoints + value);
    }
  }

  return (
    <UserDataContext.Provider
      value={{
        fileDataURL,
        createFileDataURL,
        setName,
        name,
        experiencePoints,
        money,
        level,
        levelPoints,
        addExperiencePoints,
        addMoney,
        setTrees,
        trees,
        visitedBlog,
        setVisitedBlog,
        hasAward,
        setHasAward,
        instagram,
        setInstagram,
        linkedIn,
        setLinkedIn,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  return context;
}
