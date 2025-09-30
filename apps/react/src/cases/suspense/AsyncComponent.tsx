import { use } from 'react';

interface IAsyncComponent {
  request: Promise<string>;
}

export const AsyncComponent: React.FC<IAsyncComponent> = ({ request }) => {
  const flag = use(request);
  return <span>Async result: {flag}</span>;
};
