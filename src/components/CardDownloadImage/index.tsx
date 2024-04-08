import { saveAs } from "file-saver"; 
import styles from './styles.module.scss'

type CardProps = {
  imageSrc: string, 
  title: string,
  text: string,
  buttonText: string, 
}

const CardDownloadImage: React.FC<CardProps>  = ({ imageSrc, title, text, buttonText }) => {
  const handleDownload = () => {
    saveAs(imageSrc, 'image.png');
  };

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={handleDownload}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default CardDownloadImage;