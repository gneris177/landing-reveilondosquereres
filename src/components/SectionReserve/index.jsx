import { useState, useEffect, memo } from 'react';
import Container from '../Container';
import image0 from '../../assets/images/hospedagem/0-min.webp';
import image1 from '../../assets/images/hospedagem/1-min.webp';
import image2 from '../../assets/images/hospedagem/2-min.webp';
import image3 from '../../assets/images/hospedagem/3-min.webp';
import image4 from '../../assets/images/hospedagem/4-min.webp';
import image5 from '../../assets/images/hospedagem/5-min.webp';
import image6 from '../../assets/images/hospedagem/6-min.webp';
import image7 from '../../assets/images/hospedagem/7-min.webp';
import image8 from '../../assets/images/hospedagem/8-min.webp';
import image9 from '../../assets/images/hospedagem/9-min.webp';
import image10 from '../../assets/images/hospedagem/10-min.webp';
import image11 from '../../assets/images/hospedagem/11-min.webp';
import image12 from '../../assets/images/hospedagem/12-min.webp';
import image13 from '../../assets/images/hospedagem/13-min.webp';
import image14 from '../../assets/images/hospedagem/14-min.webp';
import image15 from '../../assets/images/hospedagem/15-min.webp';
import image16 from '../../assets/images/hospedagem/16-min.webp';
import image17 from '../../assets/images/hospedagem/17-min.webp';
import image18 from '../../assets/images/hospedagem/18-min.webp';
import image21 from '../../assets/images/hospedagem/21-min.webp';
import arrowLeft from '../../assets/images/SETA_esquerda.png';
import arrowRight from '../../assets/images/SETA_direita.png';
import './style.css';

const images = [
  image0, image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12, image13,
  image14, image15, image16, image17, image18, image21
];

const SectionReserve = () => {
  const [imageView, setImageView] = useState({ url: '', index: 0 });
  const [isOpen, setIsopen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const Gallery0 = memo(() => (
    <>
      <img src={image0} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image1} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image2} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image3} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image4} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
    </>
  ));

  const Gallery1 = memo(() => (
    <>
      <img src={image5} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image6} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image7} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image8} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image9} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
    </>
  ));

  const Gallery2 = memo(() => (
    <>
      <img src={image10} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image11} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image12} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image13} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image14} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
    </>
  ));

  const Gallery3 = memo(() => (
    <>
      <img src={image15} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image16} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image17} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image18} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
      <img src={image21} alt="Imagem da nossa hospedagem" loading='lazy' onClick={openImage} />
    </>
  ));

  Gallery0.displayName = 'Gallery0';
  Gallery1.displayName = 'Gallery1';
  Gallery2.displayName = 'Gallery2';
  Gallery3.displayName = 'Gallery3';

  const nextImages = () => {
    if (galleryIndex >= 3) return;
    setGalleryIndex(galleryIndex + 1);
  };

  const prevImages = () => {
    if (galleryIndex <= 0) return;
    setGalleryIndex(galleryIndex - 1);
  };

  const openImage = (e) => {
    setIsopen(true);
    setImageView({ url: e.target.src });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (imageView.url === '') return;

      if (event.key === 'ArrowRight') {
        const index = images.findIndex(img => imageView.url.indexOf(img) >= 0);

        if (index + 1 < images.length) {
          setImageView({ url: images[index + 1], index: index + 1 });
        }
      } else if (event.key === 'ArrowLeft') {
        const index = images.findIndex(img => imageView.url.indexOf(img) >= 0);

        if (index > 0) {
          setImageView({ url: images[index - 1], index: index - 1 });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageView]);

  return (
    <section className="reserve">
      <Container>
        <div className="reserve__content">
          {galleryIndex == 0 && <Gallery0 />}
          {galleryIndex == 1 && <Gallery1 />}
          {galleryIndex == 2 && <Gallery2 />}
          {galleryIndex == 3 && <Gallery3 />}
        </div>

        <div className="carousel__buttons">
          {galleryIndex > 0 && (
            <button onClick={prevImages}>
              <img
                src={arrowLeft}
                alt="imagem ilustrativa com uma seta para esquerda"
              />
            </button>
          )}

          {galleryIndex < 3 && (
            <button onClick={nextImages}>
              <img
                src={arrowRight}
                alt="imagem ilustrativa com uma seta para direita"
              />
            </button>
          )}
        </div>

        <a
          href="https://www.baixioreveillondosquereres.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="reserve__button">Faça sua reserva</button>
        </a>
      </Container>

      {isOpen && (
        <div className='modal'>
          <span style={close} onClick={() => setIsopen(false)}>&times;</span>
          <img
            className="modal-content"
            src={imageView.url}
            alt="Imagem da nossa hospedagem"
          />
        </div>
      )}
    </section>
  );
};

const close = {
  position: 'absolute',
  top: 15,
  right: 35,
  color: '#f1f1f1',
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default SectionReserve;
