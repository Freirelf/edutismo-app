import styles from './styles.module.scss'
import Link from 'next/link'

type CardProps = {
  imageSrc: string, 
  title: string,
  text: string,
  buttonText: string, 
  linkTo: string,
}

const Card: React.FC<CardProps>  = ({ imageSrc, title, text, buttonText, linkTo }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>
          <Link href={linkTo}>{buttonText}</Link>
        </button>
      </div>
    </div>
  )
}

export default Card;