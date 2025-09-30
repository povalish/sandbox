import { useReducer, useState } from 'react';
import { counter } from './Component.reducers';

//
//

export const State: React.FC = () => {
  const [stateCount, setStateCount] = useState(0);
  const [reducerCount, dispatch] = useReducer(counter, 0);

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

  console.log('State: render');

  return (
    <div className="grid">
      <div className="card">
        <StateCounter count={stateCount} />
        <button type="button" onClick={() => setStateCount((count) => count + 1)}>
          +
        </button>
      </div>

      <div className="card">
        <button type="button" onClick={decrease}>
          -
        </button>
        <span>{reducerCount}</span>
        <button type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

//
//

interface ICounter {
  count: number;
}

const StateCounter: React.FC<ICounter> = ({ count }) => {
  console.log('StateCounter: render');
  return <span>{count}</span>;
};
