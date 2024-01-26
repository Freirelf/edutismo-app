import { Header } from "@/components/Header";

import styles from './styles.module.scss'
import Card from "@/components/Card";
import { Footer } from "@/components/Footer";

export default function Children(){

  return (
    <>
      <Header showBlogLink={false}/>

      <div className={styles.containerMain}>
        <img src="images/postChildren.png" alt="" />
      </div>

      <main className={styles.main}>
        <h1>Jogos</h1>
        <p>Venha se divertir, e aprender ao mesmo tempo!</p>
        <div className={styles.games}>
          <Card 
            imageSrc="images/gameAd.png"
            title="Adivinhação"
            text="jogo de adivinhação"
            buttonText="Jogar"
            linkTo="/game"
          />

          <Card 
            imageSrc="images/gameMemo.png"
            title="Jogo da Velha"
            text="Jogo da Velha"
            buttonText="Jogar"
            linkTo="/"
          />
        </div>
      </main>

      <section className={styles.toColor}>
        <h1>Para colorir</h1>
        <p>Agora você tem um espaço exclusivo para baixar nossos desenhos e colorir como preferir!</p>

        <div className={styles.colors}>
          <Card 
            imageSrc="images/colors1.png"
            title=""
            text=""
            buttonText="Baixar"
            linkTo="/"
          />

          <Card 
            imageSrc="images/colors2.png"
            title=""
            text=""
            buttonText="Baixar"
            linkTo="/"
          />

          <Card 
            imageSrc="images/colors3.png"
            title=""
            text=""
            buttonText="Baixar"
            linkTo="/"
          />
          
          <Card 
            imageSrc="images/colors4.png"
            title=""
            text=""
            buttonText="Baixar"
            linkTo="/"
          />          
        </div>
      </section>
      <Footer />
    </>
  )
}