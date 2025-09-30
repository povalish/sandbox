import { createContext, useCallback, useState, type PropsWithChildren } from 'react';

type Context = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const ConterContext = createContext<Context>({
  count: 0,
  increase: () => undefined,
  decrease: () => undefined,
});

export const CounterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  console.log(`CounterProvider render`);

  return <ConterContext value={{ count, increase, decrease }}>{children}</ConterContext>;
};
