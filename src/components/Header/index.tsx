import { Link as ScrollLink} from 'react-scroll'
import Link from "next/link"
import styles from "./styles.module.scss"

import Dropdown from "../DropdownButton";
import { useState } from 'react';

export function Header({showGamesLink = true, showBlogLink = true, showEducationLink = true}) {

  const profiles = [
    { value: 'parent', label: 'Pais/Mães', destination: '/parents' },
    { value: 'child', label: 'Crianças', destination: '/children' },
  ];

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
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

          <div className={styles.menu}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            {isOpen && (
              <div className={styles.mobileMenu}>
                <Link className={styles.homeLink} href="/">
                  Home
                </Link>
                {showEducationLink && (
                  <Link className={styles.educationLink} href="/education">
                    Educação
                  </Link>
                )}
                {showBlogLink && (
                  <Link className={styles.blogLink} href="/blog">
                    Blog
                  </Link>
                )}
                {showGamesLink && (
                  <Link className={styles.gameLink} href="/games">
                    Jogos
                  </Link>
                )}
              </div>
            )}
          </div>
            <Dropdown options={profiles} label="Perfis"/>
        </div>
    </header>
  </>
  )
}