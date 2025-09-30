import type { ReactNode } from 'react';

interface IBoard {
  children: (card: string) => ReactNode;
}

export const Board: React.FC<IBoard> = ({ children }) => {
  const hand = ['1', '2', '3', '4', '5'];
  const bannedCards = ['1', '3'];
  const onTheBoard = hand.filter((card) => !bannedCards.includes(card));

  return (
    <section>
      <p>Banned: {bannedCards.length}</p>
      {onTheBoard.map((card) => children(card))}
    </section>
  );
};
