import { Header } from "@/components/Header";
import { Element } from 'react-scroll'
import styles from './styles.module.scss'
import EmblaCarousel from "@/components/Carousel";

import { EmblaOptionsType } from 'embla-carousel-react'
import Image from "next/image";
import autimsParents from "../../../public/images/autimsParents.svg"
import Card from "@/components/Card";
import FormularioDuvidas from "@/components/Form";
import { Footer } from "@/components/Footer";
import CardDownloadPDF from "@/components/CardDownloadPDF";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Parents() {
  return (
    
    <main>
      <Header showGamesLink={false} />

      <div className={styles.divMain}>
        <img src="/images/post.png" alt=" mulher segurando uma placa com informativos sobre autismo." />
      </div>

      <aside className={styles.aside}>
        <h1>Sobre nós</h1>
        <div className={styles.aboutUs}>
          <div>
            <p>
              Bem-vindo ao <strong>Edutismo</strong>, um cantinho especial para famílias e amigos de pessoas incríveis com autismo! Nossa missão é tornar o universo do Transtorno do Espectro Autista (TEA) mais fácil de entender, com dicas úteis, orientações e muita diversão.
            </p>
            <br />
            <p>
              Estamos aqui para oferecer informações de qualidade, jogos educativos e manter você atualizado com as últimas novidades. Queremos criar um espaço amigável e inclusivo, onde todos se sintam bem-vindos. Acreditamos que, com conhecimento e educação, podemos tornar o mundo um lugar ainda mais especial para todos. Vamos juntos nessa jornada!
            </p>
          </div>

          <Image src={autimsParents} alt="imagem de uma mãe brincando com seu filho" />
        </div>

      </aside>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Element className={styles.education} name="education">
        <h1>Materiais para você aproveitar</h1>
        <p>Materiais para você baixar e ficar em dia com o autismo. Aproveite!</p>
      </Element>

      <div className={styles.containerCard}>
        <CardDownloadPDF  
          imageSrc="/images/post-card-one.png"
          title="Terapia Ocupacional para crianças autistas"
          text="O assunto da vez é a Terapia Ocupacional, e para falar sobre o assunto com propriedade, convidamos a terapeuta ocupacional Mayara Farias Lima Sena. Ela é formada em Terapia Ocupacional pela Universidade Federal de Pernambuco desde 2016 e trabalha com crianças e adolescentes com transtornos do desenvolvimento, especialmente o Transtorno do Espectro Autista, desde a sua formação."
          buttonText="Baixe agora"
          pdfURL="/pdf/edutismoTerapiaOcupacional.pdf"
          fileName="edutismoTerapiaOcupacional.pdf"
        />

        <CardDownloadPDF 
          imageSrc="/images/post-card-two.png"
          title="Terapia ABA para autismo"
          text="O tema da vez é a terapia ABA e como o tratamento pode ajudar a melhorar a qualidade de vida dos autistas!
          O material que você está prestes a ler foi elaborado em parceria com a bHave, uma startup que tem como objetivo facilitar o processo terapêutico automatizando os registros, relatórios, processos burocráticos, e acompanhamento de resultados, que são parte essencial de qualquer terapia, especialmente ABA."
          buttonText="Baixe agora"
          pdfURL="/pdf/terapiaABA0paraautismo.pdf"
          fileName="terapiaABA0paraautismo.pdf"
        />  

        <CardDownloadPDF 
          imageSrc="/images/post-card-three.png"
          title="9 atividades para fazer em casa com crianças autistas"
          text="O material que vamos apresentar hoje é muito especial, pois foi elaborado em parceria com o professor Márcio de Castro, também conhecido como professor Dicastro. Ele é Pós-graduando em Intervenção ABA no Autismo e Deficiência Intelecutual pela Child Behavior Institute of Miami – CBI of Miami. Terapeuta ABA no Autismo em formação pela Academia do Autismo."
          buttonText="Baixe agora"
          pdfURL="/pdf/atividadesCasaCriancaAutistas.pdf"
          fileName="atividadesCasaCriancaAutistas.pdf"
        />
      </div>

      <div className={styles.form}> 
        <div className={styles.description}>
          <h1>Envie suas Dúvidas</h1>
          <FormularioDuvidas />
        </div>

        <div className={styles.text}>
          <p>
            O mundo do autismo é fascinante e cheio de descobertas! ✨ <br/>

            Para te ajudar nessa jornada, criamos este formulário de dúvidas!<br/>

            Aqui, você pode enviar suas perguntas sobre:<br/>

            Características do autismo: O que é o TEA? Quais os sinais e sintomas?<br/>
            Diagnóstico: Como saber se meu filho tem autismo? Onde posso buscar ajuda?<br/>
            Tratamento: Quais as melhores terapias para o TEA? Como posso ajudar meu filho?<br/>
            Educação: Como garantir uma educação inclusiva e de qualidade para meu filho?<br/>
            Inclusão social: Como promover a participação social de pessoas com autismo?<br/>
            Direitos: Quais os direitos das pessoas com autismo e suas famílias?<br/>
            E muito mais!
            Nossa equipe de especialistas está pronta para te responder com informações confiáveis e atualizadas.<br/>

            <strong>Envie sua dúvida e vamos juntos construir um mundo mais inclusivo para todos!</strong>
          </p>
        </div>
      </div>

      <Element className={styles.blog} name="blog">
        <h1 className={styles.titleBlog}>Blog</h1>
        <div className={styles.blogCards}>
          <Card 
            imageSrc="/images/post-card-blog2.png"
            title="Terapia Sensorial para Autismo: Como os estímulos sensoriais melhoram a qualidade de vida"
            text="Você sabia que a terapia sensorial para o autismo"
            buttonText="Leia mais"
            linkTo="blogTherapy"
          />

          <Card 
            imageSrc="/images/post-card-blog.png"
            title="Inclusão de autistas em ambientes diversos"
            text="Dependendo da sua perspectiva, pode parecer que inclusão de autistas é,"
            buttonText="Leia mais"
            linkTo="blogInclusion"  
          />

          <Card 
            imageSrc="/images/post-card-blog3.png"
            title="Brincadeiras funcionais: 7 ideias para crianças com autismo"
            text="O brincar é importante para qualquer criança. Durante boa parte da"
            buttonText="Leia mais"
            linkTo="blogPlayKids"
          
          />
        </div>
      </Element>

      <Footer />
    </main>
  )
}

