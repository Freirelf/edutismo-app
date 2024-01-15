import styles from './home.module.scss'
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.body}>     
      <header>
        <div className={styles.headerContent}>
          <img src="/images/Edutismo.svg" alt="Edutismo Logo" />
        </div>
      </header>

      <main>
  
        <div className={styles.mainContainer}>
          <img className={styles.mainChildren} src="images/children.svg" alt="" />
          
          <section className={styles.sectionOrange}>
            <div className={styles.selectProfile}>
              <h1>Selecione seu Perfil</h1>
              <div className={styles.parents}>
                <h3>Pais, mães, e cuidadores</h3>
                <div className={styles.linkParents}>
                  <Link href='/parents'>Acessar</Link> 
                </div>
              </div>

              <div className={styles.children}>
                <h3>Crianças</h3>
                <div className={styles.linkChildren}>
                  <Link href='#'>Acessar</Link>
                </div>
              </div>
            </div>
          </section>
        </div>

      </main>

      

    </div>
  )
}
