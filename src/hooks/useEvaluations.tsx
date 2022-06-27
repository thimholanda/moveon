import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useNotifications } from "./useNotifications";

export interface Evaluation {
  id?: number;
  squats: string;
  abs: string;
  pushUps: string;
  weight: string;
}

interface UseEvaluationsContextData {
  evaluations: Evaluation[];
  setEvaluation: (evaluation: Evaluation) => void;
}

interface UseEvaluationsProviderProps {
  children: ReactNode;
}

const UseEvaluationsContext = createContext<UseEvaluationsContextData>(
  {} as UseEvaluationsContextData
);

export function UseEvaluationsProvider({
  children,
}: UseEvaluationsProviderProps) {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const { createNotification } = useNotifications();

  function setEvaluation(evaluation: Evaluation) {
    evaluation.id = evaluations.length + 1;
    setEvaluations([...evaluations, evaluation]);
    createNotification("Confira seu histórico de avaliações pelo menu");
  }

  useEffect(() => {
    console.log(evaluations);
  }, [evaluations]);

  return (
    <UseEvaluationsContext.Provider value={{ setEvaluation, evaluations }}>
      {children}
    </UseEvaluationsContext.Provider>
  );
}

export function useEvaluations() {
  return useContext(UseEvaluationsContext);
}
