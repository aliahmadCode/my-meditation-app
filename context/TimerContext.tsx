import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface TimerContextProps {
  duration: number | undefined;
  fallback: number | undefined;
  setDuration: Dispatch<SetStateAction<number>>;
  setFallback: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextProps>({
  duration: undefined,
  setDuration: () => { },
  fallback: undefined,
  setFallback: () => { },
});

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(10);
  const [fallback, setFallback] = useState(10);
  return (
    <TimerContext.Provider
      value={{ duration, setDuration, fallback, setFallback }}
    >
      {children}
    </TimerContext.Provider>
  );
};
