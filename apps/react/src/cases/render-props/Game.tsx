import { Board } from './Board';
import { Card } from './Card';
import { Hand } from './Hand';

export const Game: React.FC = () => {
  return (
    <div>
      <Board>{(card) => <Card>{card}</Card>}</Board>
      <Hand>{(card) => <Card>{card}</Card>}</Hand>
    </div>
  );
};
