import type { ReactNode } from 'react';

interface IHand {
  children: (card: string) => ReactNode;
}

export const Hand: React.FC<IHand> = ({ children }) => {
  const hand = ['1', '2', '3', '4', '5'];
  const bannedCards = ['1', '3'];
  const onTheHand = hand.filter((card) => bannedCards.includes(card));

  return (
    <section>
      <p>Banned: {bannedCards.length}</p>
      {onTheHand.map((card) => children(card))}
    </section>
  );
};
