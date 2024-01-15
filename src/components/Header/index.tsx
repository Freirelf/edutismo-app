
import Link from "next/link"
import styles from "./styles.module.scss"

import Dropdown from "../DropdownButton";



export function Header({showGamesLink = true}) {


  const profiles = [
    { value: 'parent', label: 'Pais/Mães', destination: '/parents' },
    { value: 'child', label: 'Crianças', destination: '/children' },
  ];


  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Link className={styles.homeLink} href="#">
            Home
          </Link>
          <Link className={styles.educationLink} href="#">
            Educação
            </Link>
          <img src="/images/Edutismo.svg" alt="Edutismo Logo" />
          <Link className={styles.blogLink} href="#">
            Blog
          </Link>
          {showGamesLink && (
            <Link className={styles.gameLink} href="#">
              Jogos
            </Link>
          )}
        </div>

        <Dropdown options={profiles} label="Perfis"/>

      </header>
    </>
  )
}