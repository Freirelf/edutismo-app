import styles from './styles.module.scss'

type CardProps = {
  imageSrc: string, 
  title: string,
  text: string,
  buttonText: string, 
  pdfURL: string,
  fileName: string,
}

const CardDownloadPDF: React.FC<CardProps>  = ({ imageSrc, title, text, buttonText, pdfURL, fileName}) => {
  const handleDownloadPDF = (pdfURL:string, fileName:string) => {
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadButtonClick = () => {
    handleDownloadPDF(pdfURL, fileName)
  }

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={handleDownloadButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default CardDownloadPDF;