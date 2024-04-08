import { Header } from "@/components/Header";
import { Element } from 'react-scroll'
import styles from './styles.module.scss'
import Card from "@/components/Card";
import { Footer } from "@/components/Footer";
import CardDownloadImage from "@/components/CardDownloadImage";

export default function Children(){

  return (
    <>
      <Header showBlogLink={false}/>

      <div className={styles.containerMain}>
        <img src="images/postChildren.png" alt="" />
      </div>

      <main className={styles.main} >
      <img src="/images/blogChildren.png" alt="" />
      <Element name="game">
        <h1>Jogos</h1>
        </Element>
        <p className={styles.text}>Se diverta, e aprenda ao mesmo tempo :)</p>
        <div className={styles.games}>
          <Card 
            imageSrc="images/gameAd.png"
            title="Adivinhação"
            text="jogo de adivinhação"
            buttonText="Jogar"
            linkTo="/gameRandom"
          />

          <Card 
            imageSrc="images/gameMemo.png"
            title="Jogo da Memória"
            text="Jogo da Memória"
            buttonText="Jogar"
            linkTo="/gameMemorization"
          />
        </div>
      </main>

      <section className={styles.toColor}>
        <Element name="education">
          <h1>Para colorir</h1> 
        </Element>
        <p>Você tem um espaço exclusivo para baixar nossos desenhos e colorir como preferir!</p>

        <div className={styles.colors}>
          <CardDownloadImage 
            imageSrc="images/colors1.png"
            title="Foguetinho"
            text="Sua imaginação voa com cores"
            buttonText="Baixar"
          />

          <CardDownloadImage 
            imageSrc="images/colors2.png"
            title="Dino"
            text="Use sua imaginação aqui"
            buttonText="Baixar"
          />

          <CardDownloadImage 
            imageSrc="images/colors3.png"
            title="Bixinho"
            text="Ficarei mais feliz com cores"
            buttonText="Baixar"
          />
          
          <CardDownloadImage 
            imageSrc="images/colors4.png"
            title="Super"
            text="Me ajude a colorir o mundo"
            buttonText="Baixar"
          />          
        </div>
      </section>
      <Footer />
    </>
  )
}