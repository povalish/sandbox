import { useState, type PropsWithChildren } from 'react';
import { Child } from './Child';

export const Parent: React.FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  console.log('Parent: re-render');

  return (
    <div className="parent">
      <button type="button" onClick={() => setCounter((count) => count + 1)}>
        Parent Counter: {counter}
      </button>

      <div className="grid">
        <Child name="0" />
        {children}
      </div>
    </div>
  );
};
