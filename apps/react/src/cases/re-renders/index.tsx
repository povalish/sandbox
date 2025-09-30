import { useState } from 'react';
import { Child } from './Child';
import { Parent } from './Parent';

export const Root: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    console.log('Count: ', count);
  };

  console.log('App: re-render');

  return (
    <main>
      <button type="button" onClick={handleClick}>
        App Counter: {count}
      </button>

      <Parent>
        <Child name="1" />
        <Child name="2" />
        <Child name="3" />
        <Child name="4" />
      </Parent>
    </main>
  );
};
