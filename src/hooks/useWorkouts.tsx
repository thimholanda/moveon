import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

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
  watchedTimes: number;
}

interface WorkoutsContextData {
  workouts: Array<Workout>;
  setWorkouts: React.Dispatch<SetStateAction<Workout[]>>;
  workoutsDailyControl: number;
  setWorkoutsDailyControl: React.Dispatch<SetStateAction<number>>;
}

interface WorkoutsProviderProps {
  children: ReactNode;
}

const WorkoutsContext = createContext<WorkoutsContextData>({} as WorkoutsContextData);

export function WorkoutsProvider({ children }: WorkoutsProviderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [workoutsDailyControl, setWorkoutsDailyControl] = useState(0);

  useEffect(() => {
    console.log("init");

    const workoutData: Workout[] = [
      {
        id: 1,
        title: "Treino Iniciante 1",
        videoId: "360071532",
        category: "Iniciante",
        time: 719,
        calories: 157,
        description: "Esse treino desenvolve o corpo como um todo de maneira eficiente, pois utiliza toda as regiões de forma integrada. Ideal para quem está iniciando a prática de atividade física.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-iniciante.jpg",
        watchedTimes: 0,
      },
      {
        id: 2,
        title: "Treino Iniciante 2",
        videoId: "226190945",
        category: "Iniciante",
        time: 742,
        calories: 120,
        description: "Uma aula com objetivo de melhorar o condicionamento físico geral. Ideal para quem está iniciando a prática de atividade física.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-iniciante-2.jpg",
        watchedTimes: 0,
      },
      {
        id: 3,
        title: "Treino Avançado 1",
        videoId: "574993872",
        category: "Avançado",
        time: 641,
        calories: 178,
        description: "Essa aula é indicada para quem já tem uma boa experiência com treinos. Um treino que trabalha o corpo todo, com o objetivo de melhorar o condicionamento físico, força e resistência.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/avancado-1.jpg",
        watchedTimes: 0,
      },
      {
        id: 4,
        title: "Treino Avançado 2",
        videoId: "228850483",
        category: "Avançado",
        time: 589,
        calories: 179,
        description: "Essa aula é indicada para quem já tem uma boa experiência com treinos. Um treino que trabalha o corpo todo, com o objetivo de melhorar o condicionamento físico, força e resistência.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/avancado-2.jpg",
        watchedTimes: 0,
      },
      {
        id: 5,
        title: "Mobilidade Iniciante",
        videoId: "309667481",
        category: "Mobilidade",
        time: 332,
        calories: 120,
        description: "Esta aula tem como objetivo, diminuir a tensão muscular promovendo o relaxamento e trazendo a mente para o momento presente, interrompendo nossos ciclos de preocupação.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-mobilidade-iniciante.jpg",
        watchedTimes: 0,
      },
      {
        id: 6,
        title: "Mobilidade na cadeira",
        videoId: "267127302",
        category: "Mobilidade",
        time: 520,
        calories: 57,
        description: "Essa prática, poderá ser feita na cadeira do seu trabalho ou em casa. O treino tem como objetivo melhorar e restaurar ou manter a amplitude do movimento, e estão atrelados à performance funcional, nome dado a capacidade de desempenhar ações das atividades da vida diária ou gesto motor específico de algum esporte.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/mobilidade-cadeira.jpg",
        watchedTimes: 0,
      },

      {
        id: 7,
        title: "Alongamento para coluna",
        videoId: "421810842",
        category: "Alongamento",
        time: 379,
        calories: 90,
        description: "Uma prática para ser feita na sua casa ou até mesmo no trabalho. Ótima para quem passa muito tempo sentado. Essa aula, irá relaxar sua coluna e lombar. Pode ser repetida várias vezes ao dia.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-alongamento.jpg",
        watchedTimes: 0,
      },
      {
        id: 8,
        title: "Alongamento para a cervical",
        videoId: "351668646",
        category: "Alongamento",
        time: 318,
        calories: 32,
        description: "Uma aula focada no relaxamento e alongamento dos músculos do pescoço e trapézio. Lembre-se de manter a cabeça em posição neutra (queixo paralelo ao chão) durante sua jornada de trabalho, isso pode diminuir esse tipo de desconforto.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/alongamento-cervical.jpg",
        watchedTimes: 0,
      },
      {
        id: 9,
        title: "Meditação guiada",
        videoId: "218840269",
        category: "Meditacão",
        time: 316,
        calories: 10,
        description: "Te convido a meditar comigo, aprofundando a atenção em si mesmo, acalmando as agitações mentais.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-meditacao.jpg",
        watchedTimes: 0,
      },
      {
        id: 10,
        title: "Meditação para insônia",
        videoId: "499020105",
        category: "Meditacão",
        time: 351,
        calories: 48,
        description: "Dificuldades para dormir? Essa meditação pode te ajudar! Ela pode ser feita já na cama, com a luz baixa, e ao finalizar, evite novos estímulos e já siga para dormir, se possível.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/meditacao-insonia.jpg",
        watchedTimes: 0,
      },
      {
        id: 11,
        title: "Treino geral",
        videoId: "470914444",
        category: "Geral",
        time: 448,
        calories: 98,
        description: "Treino geral para todo o corpo, com um gasto calórico alto e trabalho muscular intenso.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-geral.jpg",
        watchedTimes: 0,
      },
      {
        id: 12,
        title: "Treino geral básico",
        videoId: "577901487",
        category: "Geral",
        time: 509,
        calories: 92,
        description: "Aula rápida, com o objetivo de trabalhar o corpo todo, buscando fortalecimento muscular e melhora do condicionamento físico.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/treino-geral-basico.jpg",
        watchedTimes: 0,
      },
      {
        id: 13,
        title: "Yoga saudação à lua",
        videoId: "760417097",
        category: "Yoga",
        time: 530,
        calories: 42,
        description: "A saudação a lua é uma prática refrescante e equilibrante, você se sentirá revigorado e com mais equilíbrio emocional. A sequência pode ser repetida quantas vezes você quiser.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/yoga-saudacao.jpg",
        watchedTimes: 0,
      },
      {
        id: 14,
        title: "Yoga para flexibilidade",
        videoId: "346053190",
        category: "Yoga",
        time: 600,
        calories: 40,
        description: "Prática curta e completa para melhorar a sua flexibilidade. Pode ser feita todos os dias ao acordar, preparando o corpo para as atividades do dia ou antes de dormir.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/yoga-flexibilidade.jpg",
        watchedTimes: 0,
      },
      {
        id: 15,
        title: "Respiração completa",
        videoId: "608745482",
        category: "Respiração",
        time: 276,
        calories: 29,
        description: "Essa respiração pode ser feita por qualquer pessoa, a qualquer momento do dia. Irá trazer mais autocontrole que refletirá em diferentes aspectos no seu corpo e mente.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/respiracao-completa.jpg",
        watchedTimes: 0,
      },
      {
        id: 16,
        title: "Respiração para o corpo e a mente",
        videoId: "216188867",
        category: "Respiração",
        time: 442,
        calories: 44,
        description: "Esse exercício de respiração é indicado para equilibrar seu mental e emocional. Ele equilibra os dois hemisférios cerebrais. Por trazer estímulo para os dois hemisférios (o que te acalma e o que te desperta) não é recomendado ser feito antes de dormir.",
        currentTime: 0,
        progress: [0],
        isCompleted: false,
        thumbnail: "/respiracao-corpo.jpg",
        watchedTimes: 0,
      },
    ];
    setWorkouts(workoutData);
  }, []);

  return (
    <WorkoutsContext.Provider
      value={{
        workouts,
        setWorkouts,
        workoutsDailyControl,
        setWorkoutsDailyControl,
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
}

export function useWorkouts() {
  return useContext(WorkoutsContext);
}
