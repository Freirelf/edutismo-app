import React from 'react';
import { Card } from '../GameContext';

import styles from './styles.module.scss';

interface CardProps {
  card: Card;
  onCardClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({ card, onCardClick }) => {
  if (!card) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className={`${styles.card} ${card.isFlipped ? styles.flip : ''}`} onClick={onCardClick}>
      <div className={styles.cardFront}>
        <img src={`/images/${card.icon}.png`} alt={card.icon} />
      </div>
      <div className={styles.cardBack}>
        <img src="/images/card.png" alt="Card Back" />
      </div>
    </div>
  );
};

export default CardComponent;