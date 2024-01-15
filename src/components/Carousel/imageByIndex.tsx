import image1 from './postCarrossel/postOne.png'
import image2 from './postCarrossel/postTwo.png'
import image3 from './postCarrossel/postThree.png'
import image4 from './postCarrossel/postFour.png'
import image5 from './postCarrossel/postFive.png'
import image6 from './postCarrossel/postSix.png'
import { StaticImageData } from 'next/image'


export const images: StaticImageData[] = [image1, image2, image3, image4, image5, image6]

const imageByIndex = (index: number):  StaticImageData => images[index % images.length]

export default imageByIndex
