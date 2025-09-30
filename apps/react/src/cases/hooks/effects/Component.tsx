import { useEffect, useId, useState } from 'react';

export const Component: React.FC = () => {
  const id = useId();
  const [text, setText] = useState('a');

  useEffect(() => {
    function runTimer() {
      console.log(`⏰ ${text}`);
    }

    console.log(`🔵 Schedule "${text}" log`);
    const timerId = setTimeout(runTimer, 3000);

    return () => {
      console.log(`🔵 Cancel "${text} log"`);
      clearTimeout(timerId);
    };
  }, [text]);

  console.log(`🔵 Render Component`);

  return (
    <div>
      <label htmlFor={id}>What to log</label>{' '}
      <input id={id} type="text" onChange={(e) => setText(e.target.value)} value={text} />
    </div>
  );
};
