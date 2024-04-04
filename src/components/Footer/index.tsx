import { FaInstagram } from 'react-icons/fa' 
import { FaWhatsapp} from 'react-icons/fa' 
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from 'react-icons/md' 

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="/images/Edutismo.svg" alt="Edutismo Logo" />
      <h3>Acreditamos em cada potencial, cada vida importa e a sua não é diferente, amamos você do jeito que você nasceu!</h3>
      <p className={styles.location}><CiLocationOn size={16}/> Fortaleza, Ce - Brasil.</p>
      </div>
      <a href=""><FaInstagram className={styles.icon} /></a>
      <a href=""><FaWhatsapp className={styles.icon} /></a>
      <a href=""><MdEmail className={styles.icon} /></a>
      
      <div className={styles.rights}>
        <p>Todos os direitos reservados. Site desenvolvido por LFSolutions.</p>
      </div>
  </footer>
  )
}