import { useContext } from 'react';
import { ConterContext } from './CounterContext';

interface IChild {
  name: string;
}

export const Child: React.FC<IChild> = ({ name }) => {
  const { count, increase, decrease } = useContext(ConterContext);

  console.log(`Child-${name} render`);

  return (
    <div className="card">
      <button type="button" onClick={decrease}>
        -
      </button>
      <span>
        {name} Counter: {count}
      </span>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};
