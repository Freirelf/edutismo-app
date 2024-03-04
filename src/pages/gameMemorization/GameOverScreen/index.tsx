import { useGame } from "../GameContext"
import styles from "./styles.module.scss"

const GameOverScreen = () => {
  const { restartGame } = useGame()

  return (
    <section className={styles.content}>
      <h1>Parabéns! Você completou o jogo!</h1>
      <button onClick={restartGame}>Reiniciar Jogo</button>
    </section>
  )
}

export default GameOverScreen;