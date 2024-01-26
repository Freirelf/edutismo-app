
import { FaInstagram } from 'react-icons/fa' 
import { FaWhatsapp} from 'react-icons/fa' 
import { MdEmail } from 'react-icons/md' 

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Acompanhe nossas redes sociais!</h1>
      <a href=""><FaInstagram className={styles.icon} /></a>
      <a href=""><FaWhatsapp className={styles.icon} /></a>
      <a href=""><MdEmail className={styles.icon} /></a>
      
      <div className={styles.rights}>
        <p>Todos os direitos reservados!</p>
      </div>
  </footer>
  )
}