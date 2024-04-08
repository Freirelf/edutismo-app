import React, { useState, useEffect } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import styles from "./styles.module.scss"
import { Header } from "@/components/Header";

export default function GameRandom() {
  const [defaultNumberGame] = useState(10);
  const [numberGame, setNumberGame] = useState(defaultNumberGame)
  const [secretNumber, setSecretNumber] = useState(generateNumberRandom())
  const [attempt, setAttempt] = useState(1)
  const [isGameOver, setIsGameOver] = useState(true);

  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [customNumberGame, setCustomNumberGame] = useState<number | null>(null)

  useEffect(() => {
    initialMessage();
  }, [numberGame]);

  function initialMessage() {
    setTitle('Jogo do Número Secreto');
    setParagraph(`Escolha um número entre 1 e ${numberGame}. Veja sua sorte!`);
  }
  
  function generateNumberRandom(maxNumber?: number) {
    let chosenNumber = Math.floor(Math.random() * numberGame + 1);

    return chosenNumber
  }

  function checkKick() {
    const kick = parseInt(inputValue, 10); // Converte o valor do input para número
    
    if (isNaN(kick) || kick < 1 || kick > numberGame) {
      setTitle('Número Inválido');
      setParagraph('Por favor, escolha um número válido entre 1 e ' + numberGame);
    } else if (kick === secretNumber) {
      setTitle('Woow 😱 Acertouu! ');
      setParagraph(`Você descobriu o número secreto :) Em ${attempt} ${attempt === 1 ? 'tentativa' : 'tentativas'}`);
      setIsGameOver(false);
    } else {
      setParagraph(`Está perto, o número secreto é ${kick > secretNumber ? 'menor' : 'maior'} do que ${kick}`);
    }
      setAttempt(attempt + 1);
      setInputValue('')
    } 

    function resetGame(){
      const newSecretNumber = generateNumberRandom()
      setSecretNumber(newSecretNumber)
      setInputValue('')
      setAttempt(1)

      initialMessage()

      setIsGameOver(true)
    }

    const handleCustomNumberGameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      setCustomNumberGame(value);
    };
  
    const handleSetCustomGameNumber = () => {
      if (customNumberGame && customNumberGame > 0) {
        setNumberGame(customNumberGame);
        setSecretNumber(generateNumberRandom(customNumberGame));
        resetGame();
        setCustomNumberGame(null);
      }
    };

  return (
    <>
      <Header showEducationLink={false} showBlogLink={false} showGamesLink={false}/>
      <div className={styles.body}>
        <div className={styles.containerGame}>
          <div className={styles.containerConteudo}>
          <div className={styles.return}>
            <a href="/children">
              <IoChevronBackCircleOutline size={50} color="violet"/>
            </a>
        </div>
            <div className={styles.containerInformacoes}>
              <div className={styles.containerTexto}>
                <h1>{title}</h1>
                <p>{paragraph}</p>
              </div>
              <input
                className={styles.containerInput}
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite seu palpite"
              />
              <div className={styles.containerBotoes}>
                <button 
                onClick={checkKick}
                className={styles.containerBotao}>
                  Chutar
                </button>
                <button
                  onClick={resetGame}
                  id="reiniciar"
                  className={styles.containerBotao}
                  disabled={isGameOver}
                >
                  Novo jogo
                </button>
              </div>
              <div className={styles.additionalNumber}>
                <h2>Quer escolher até qual número jogar?</h2>
                <p>Digite o número desejado</p>
                <input 
                  type="number" 
                  onChange={handleCustomNumberGameChange}
                  value={customNumberGame || ''}
                  placeholder="Digite um número"
                />
                <button onClick={handleSetCustomGameNumber}>Definir</button>
              </div>
            </div>
            <img
              src="images/ia.png"
              alt="Uma pessoa olhando para a esquerda"
            />
          </div>
        </div>
      </div>
    </>
  );
};
