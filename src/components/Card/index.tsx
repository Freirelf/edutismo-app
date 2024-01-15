import styles from './styles.module.scss'

type CardProps = {
  imageSrc: string, 
  title: string,
  text: string,
  buttonText: string, 
  onClick: () => void,
}

const Card: React.FC<CardProps>  = ({ imageSrc, title, text, buttonText, onClick }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default Card;