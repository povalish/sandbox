import { Child } from './Child';
import { CounterProvider } from './CounterContext';
import { Dump } from './Dump';

export const Parent: React.FC = () => {
  console.log('Parent render');
  return (
    <div>
      <CounterProvider>
        <Child name="1" />
      </CounterProvider>

      <CounterProvider>
        <Child name="2" />
      </CounterProvider>

      <Dump />
    </div>
  );
};
