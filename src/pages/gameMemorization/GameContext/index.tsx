import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Card {
  id: string;
  icon: string;
  isFlipped: boolean;
}

interface GameContextProps {
  cards: Card[];
  flipCard: (id: string) => void;
  gameStatus: 'playing' | 'gameOver';
  matchedCards: string[];
  restartGame: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'gameOver'>('playing')

  const stickers = [
    'bat',
    'bath-dog',
    'bee',
    'bird',
    'crocodile',
    'dinosaur',
    'happy',
    'mushroom',
    'racoon',
    'sun',
  ];

  const createPairsFromStickers = (stickers: string[]): Card[] => {
    const newCards: Card[] = stickers.flatMap((sticker) => [
      { id: `${sticker}-${createIdFromCardSticker(sticker)}`, icon: sticker, isFlipped: false },
      { id: `${sticker}-${createIdFromCardSticker(sticker)}`, icon: sticker, isFlipped: false },
    ]).sort(() => Math.random() - 0.5);

    return newCards;
  };

  const createIdFromCardSticker = (sticker: string): string => {
    return sticker + String(Math.floor(Math.random() * 1000 + 1));
  };

  useEffect(() => {
    setCards(createPairsFromStickers(stickers));
  }, []);

  const restartGame = () => {
    const newCards = createPairsFromStickers(stickers);
    setCards(newCards);
    setOpenCards([]);
    setMatchedCards([]);
    setGameStatus('playing');
  };

  useEffect(() => {
    if (openCards.length === 2) {
      const [firstId, secondId] = openCards;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard && secondCard) {
        if (firstCard.icon === secondCard.icon) {
          setMatchedCards((prev) => [...prev, firstId, secondId]);
          setOpenCards([]);
        } else {
          setTimeout(() => {
            setCards(cards =>
              cards.map(card => ({
                ...card,
                isFlipped: matchedCards.includes(card.id) ? card.isFlipped : false,
              }))
            );
            setOpenCards([]);
          }, 1000);
        }
      }
    }
  }, [openCards, cards, matchedCards]);

  const flipCard = (id: string) => {
    if(gameStatus === 'playing') {
      setCards(cards =>
        cards.map(card => ({
          ...card,
          isFlipped: card.id === id ? !card.isFlipped : card.isFlipped,
        }))
      );

      if (!matchedCards.includes(id) && !openCards.includes(id)) {
        setOpenCards((prev) => [...prev, id].slice(0, 2));
      }
    };
  }

  useEffect(() => {
    if (cards.length > 0 && matchedCards.length === cards.length) {
      setGameStatus('gameOver');
    }
  }, [matchedCards, cards]);

  return (
    <GameContext.Provider value={{ 
      cards, 
      flipCard, 
      matchedCards, 
      gameStatus, 
      restartGame 
    }}>
      {children}
    </GameContext.Provider>)
};
