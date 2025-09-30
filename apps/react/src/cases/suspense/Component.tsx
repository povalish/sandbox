import { Suspense } from 'react';
import { AsyncComponent } from './AsyncComponent';

//
//

async function fakeRequest(): Promise<string> {
  return new Promise((resolve) => {
    console.log('call fake request');
    setTimeout(() => {
      console.log(`Return Boo!`);
      resolve('Boo!');
    }, 1000);
  });
}

//
//

export const Component: React.FC = () => {
  return (
    <div className="card">
      <Suspense fallback={<span>Loading...</span>}>
        <AsyncComponent request={fakeRequest()} />
      </Suspense>
    </div>
  );
};
