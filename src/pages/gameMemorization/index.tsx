import { useGame } from './GameContext';
import CardComponent from './CardComponent';

import styles from './styles.module.scss';
import GameOverScreen from './GameOverScreen';
import { Header } from '@/components/Header';

const GameMemorization: React.FC = () => {
  const { cards, flipCard, gameStatus } = useGame();

  return (
    <>
      <Header showEducationLink={false} showBlogLink={false} showGamesLink={false}/>
      <header className={styles.header}>
        <h1>Jogo da memorização</h1>
        <a href='/children'> voltar</a>
      </header>
      {gameStatus === 'playing' ? (
        <div className={styles.gameBoard}>
        <div id="gameBoard" className={styles['main-game']}>
          {cards.map((card) => (
            <CardComponent key={card.id} card={card} onCardClick={() => flipCard(card.id)} />
          ))}
        </div>
      </div>
      ) : (
        <GameOverScreen />
      )}
      
    </>
  );
};

export default GameMemorization;