import { useState } from 'react';
import Container from '../Container';
import ImagemModal from '../ModalImagem';
import image0 from '../../assets/images/hospedagem/0.jpg'
import image1 from '../../assets/images/hospedagem/1.jpg'
import image2 from '../../assets/images/hospedagem/2.jpg'
import image3 from '../../assets/images/hospedagem/3.jpg'
import image4 from '../../assets/images/hospedagem/4.jpg'
import image5 from '../../assets/images/hospedagem/5.jpg'
import image6 from '../../assets/images/hospedagem/6.jpg'
import image7 from '../../assets/images/hospedagem/7.jpg'
import image8 from '../../assets/images/hospedagem/8.png'
import image9 from '../../assets/images/hospedagem/9.png'
import image10 from '../../assets/images/hospedagem/10.png'
import image11 from '../../assets/images/hospedagem/11.png'
import image12 from '../../assets/images/hospedagem/12.png'
import image13 from '../../assets/images/hospedagem/13.png'
import image14 from '../../assets/images/hospedagem/14.jpg'
import image15 from '../../assets/images/hospedagem/15.jpg'
import image16 from '../../assets/images/hospedagem/16.jpg'
import image17 from '../../assets/images/hospedagem/17.jpg'
import image18 from '../../assets/images/hospedagem/18.jpg'
import image19 from '../../assets/images/hospedagem/19.jpg'
import image20 from '../../assets/images/hospedagem/20.jpg'
import image21 from '../../assets/images/hospedagem/21.jpg'
import image22 from '../../assets/images/hospedagem/22.jpg'
import arrowLeft from '../../assets/images/SETA_esquerda.png'
import arrowRight from '../../assets/images/SETA_direita.png'
import './style.css';

const images = [
  { img: image0, alt: '' },
  { img: image1, alt: '' },
  { img: image2, alt: '' },
  { img: image3, alt: '' },
  { img: image4, alt: '' },
  { img: image5, alt: '' },
  { img: image6, alt: '' },
  { img: image7, alt: '' },
  { img: image8, alt: '' },
  { img: image9, alt: '' },
  { img: image10, alt: '' },
  { img: image11, alt: '' },
  { img: image12, alt: '' },
  { img: image13, alt: '' },
  { img: image14, alt: '' },
  { img: image15, alt: '' },
  { img: image16, alt: '' },
  { img: image17, alt: '' },
  { img: image18, alt: '' },
  { img: image19, alt: '' },
  { img: image20, alt: '' },
  { img: image21, alt: '' },
  { img: image22, alt: '' }
]
const imagesPerPage = 5; 

const SectionReserve = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const nextImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex + imagesPerPage >= images.length
        ? 0
        : prevIndex + imagesPerPage
    );
  };

  const prevImages = () => {
    setStartIndex((prevIndex) =>
      prevIndex - imagesPerPage < 0
        ? images.length - imagesPerPage
        : prevIndex - imagesPerPage
    );
  };

  const openModal = (url) => {
    setImageUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setImageUrl('');
  };

  return (
    <section className="reserve">
      <Container>
        <div className="reserve__content">
          {images.slice(startIndex, startIndex + imagesPerPage).map((item, i) => (
            <img onClick={() => openModal(item.img)} key={`img-${i}`} src={item.img} alt={item.alt} />
          ))}
        </div>
        <div className="carousel__buttons">
          <button onClick={prevImages}>
            <img src={arrowLeft} alt=""/>
          </button>
          <button onClick={nextImages}>
            <img src={arrowRight} alt=""/>
          </button>
        </div>
        <button className='reserve__button'>Faça sua reserva</button>
      </Container>

      <ImagemModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={imageUrl} />
    </section>
  );
};

export default SectionReserve;