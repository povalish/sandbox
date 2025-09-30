import { useReducer } from 'react';
import { counter } from './Child.reducers';

interface IChild {
  name: string;
}

export const Child: React.FC<IChild> = ({ name }) => {
  const [count, dispatch] = useReducer(counter, 0);

  const increase = () => {
    dispatch({
      type: 'increase',
      value: 1,
    });
  };

  const decrease = () => {
    dispatch({
      type: 'descrease',
      value: 1,
    });
  };

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
