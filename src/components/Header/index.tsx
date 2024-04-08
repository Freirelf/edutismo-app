import { Link as ScrollLink} from 'react-scroll'
import Link from "next/link"
import styles from "./styles.module.scss"

import Dropdown from "../DropdownButton";

export function Header({showGamesLink = true, showBlogLink = true, showEducationLink = true}) {


  const profiles = [
    { value: 'parent', label: 'Pais/Mães', destination: '/parents' },
    { value: 'child', label: 'Crianças', destination: '/children' },
  ];

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Link 
            className={styles.homeLink} 
            href="/">
            Home
          </Link>

          {showEducationLink && (
             <ScrollLink 
             to="education"
             smooth={true}
             duration={500}
             className={styles.educationLink} 
             
           >
             Educação
           </ScrollLink>
          )}
         

          <img src="/images/Edutismo.svg" alt="Edutismo Logo" />

          {showBlogLink && (
          <ScrollLink 
            to="blog"
            smooth={true}
            duration={500}
            className={styles.blogLink} 
          >
            Blog
          </ScrollLink>
          )}

          {showGamesLink && (
          <ScrollLink 
            to="game"
            smooth={true}
            duration={500}
            className={styles.gameLink} 
          > 
            Jogos
          </ScrollLink>
          )}
        </div>

        <Dropdown options={profiles} label="Perfis"/>

      </header>
    </>
  )
}