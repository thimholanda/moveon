import { createContext, ReactNode, useContext, useState } from "react";

interface UseHistoryContextData {
  userHistories: UserHistory[];
  addToHistory: (userHistory: UserHistory) => void;
}

export interface UserHistory {
  date?: string;
  action: string;
}

interface UseHistoryProviderProps {
  children: ReactNode;
}

const UseHistoryContext = createContext({} as UseHistoryContextData);

export function UseHistoryProvider({ children }: UseHistoryProviderProps) {
  const [userHistories, setUserHistories] = useState<UserHistory[]>([]);

  function addToHistory(userHistory: UserHistory) {
    const today = new Date();
    const date = `${String(today.getDate()).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(
      2,
      "0"
    )}/${today.getFullYear()} | ${today.getHours()}h${today.getMinutes()}`;
    userHistory.date = date;
    setUserHistories([...userHistories, userHistory]);
  }
  return (
    <UseHistoryContext.Provider value={{ userHistories, addToHistory }}>
      {children}
    </UseHistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(UseHistoryContext);
}
