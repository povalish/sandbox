import { Component } from './effects';

export const Root: React.FC = () => {
  console.log('Root: render');

  return (
    <main>
      <Component />
    </main>
  );
};
