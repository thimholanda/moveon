import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Workout {
  id: number;
  title: string;
  videoId: string;
  category: string;
  time: number;
  calories: number;
  description: string;
  progress: number[];
  currentTime: number;
  isCompleted: boolean;
  feelingAfterWorkout?: 1 | 2 | 3;
  thumbnail: string;
}

interface WorkoutsContextData {
  workouts: Array<Workout>;
  setWorkouts: React.Dispatch<SetStateAction<Workout[]>>;
}

interface WorkoutsProviderProps {
  children: ReactNode;
}

const WorkoutsContext = createContext<WorkoutsContextData>(
  {} as WorkoutsContextData
);

export function WorkoutsProvider({ children }: WorkoutsProviderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    console.log("init");

    const workoutData: Workout[] = [
      {
        id: 1,
        title: "Mobilidade Iniciante",
        videoId: "605170109",
        category: "mobilidade",
        time: 332,
        calories: 120,
        description:
          "Esta aula tem como objetivo, diminuir a tensão muscular promovendo o relaxamento e trazendo a mente para o momento presente, interrompendo nossos ciclos de preocupação.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-mobilidade-iniciante.jpg",
      },
      {
        id: 2,
        title: "Treino Iniciante 1",
        videoId: "605186591",
        category: "iniciante",
        time: 719,
        calories: 120,
        description:
          "Esse treino desenvolve o corpo como um todo de maneira eficiente, pois utiliza toda as regiões de forma integrada. Ideal para quem está iniciando a prática de atividade física.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-iniciante.jpg",
      },
      {
        id: 3,
        title: "Alongamento para coluna",
        videoId: "678429931",
        category: "alongamento",
        time: 379,
        calories: 90,
        description:
          "Uma prática para ser feita na sua casa ou até mesmo no trabalho. Ótima para quem passa muito tempo sentado. Essa aula, irá relaxar sua coluna e lombar. Pode ser repetida várias vezes ao dia.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-alongamento.jpg",
      },
      {
        id: 4,
        title: "Meditação guiada",
        videoId: "658781946",
        category: "meditacão",
        time: 316,
        calories: 90,
        description:
          "Te convido a meditar comigo, aprofundando a atenção em si mesmo, acalmando as agitações mentais.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-meditacao.jpg",
      },
    ];
    setWorkouts(workoutData);
  }, []);

  return (
    <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
}

export function useWorkouts() {
  return useContext(WorkoutsContext);
}
