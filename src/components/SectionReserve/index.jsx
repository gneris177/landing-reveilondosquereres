import { useState, useEffect } from 'react'
import Container from '../Container'
import image0 from '../../assets/images/hospedagem/0-min.webp'
import image1 from '../../assets/images/hospedagem/1-min.webp'
import image2 from '../../assets/images/hospedagem/2-min.webp'
import image3 from '../../assets/images/hospedagem/3-min.webp'
import image4 from '../../assets/images/hospedagem/4-min.webp'
import image5 from '../../assets/images/hospedagem/5-min.webp'
import image6 from '../../assets/images/hospedagem/6-min.webp'
import image7 from '../../assets/images/hospedagem/7-min.webp'
import image8 from '../../assets/images/hospedagem/8-min.webp'
import image9 from '../../assets/images/hospedagem/9-min.webp'
import image10 from '../../assets/images/hospedagem/10-min.webp'
import image11 from '../../assets/images/hospedagem/11-min.webp'
import image12 from '../../assets/images/hospedagem/12-min.webp'
import image13 from '../../assets/images/hospedagem/13-min.webp'
import image14 from '../../assets/images/hospedagem/14-min.webp'
import image15 from '../../assets/images/hospedagem/15-min.webp'
import image16 from '../../assets/images/hospedagem/16-min.webp'
import image17 from '../../assets/images/hospedagem/17-min.webp'
import image18 from '../../assets/images/hospedagem/18-min.webp'
import image19 from '../../assets/images/hospedagem/18-min.webp'
import image20 from '../../assets/images/hospedagem/18-min.webp'
import image21 from '../../assets/images/hospedagem/21-min.webp'
import image22 from '../../assets/images/hospedagem/22-min.webp'
import arrowLeft from '../../assets/images/SETA_esquerda.png'
import arrowRight from '../../assets/images/SETA_direita.png'
import './style.css'

const images = [
  { img: image0, alt: 'Imagem da nossa hospedagem' },
  { img: image1, alt: 'Imagem da nossa hospedagem' },
  { img: image2, alt: 'Imagem da nossa hospedagem' },
  { img: image3, alt: 'Imagem da nossa hospedagem' },
  { img: image4, alt: 'Imagem da nossa hospedagem' },
  { img: image5, alt: 'Imagem da nossa hospedagem' },
  { img: image6, alt: 'Imagem da nossa hospedagem' },
  { img: image7, alt: 'Imagem da nossa hospedagem' },
  { img: image8, alt: 'Imagem da nossa hospedagem' },
  { img: image9, alt: 'Imagem da nossa hospedagem' },
  { img: image10, alt: 'Imagem da nossa hospedagem' },
  { img: image11, alt: 'Imagem da nossa hospedagem' },
  { img: image12, alt: 'Imagem da nossa hospedagem' },
  { img: image13, alt: 'Imagem da nossa hospedagem' },
  { img: image14, alt: 'Imagem da nossa hospedagem' },
  { img: image15, alt: 'Imagem da nossa hospedagem' },
  { img: image16, alt: 'Imagem da nossa hospedagem' },
  { img: image17, alt: 'Imagem da nossa hospedagem' },
  { img: image18, alt: 'Imagem da nossa hospedagem' },
  { img: image19, alt: 'Imagem da nossa hospedagem' },
  { img: image20, alt: 'Imagem da nossa hospedagem' },
  { img: image21, alt: 'Imagem da nossa hospedagem' },
  { img: image22, alt: 'Imagem da nossa hospedagem' },
]

const imagesPerPage = 5

const modal = {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}

const close = {
  position: 'absolute',
  top: 15,
  right: 35,
  color: '#f1f1f1',
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'pointer',
}

const modalContent = {
  display: 'flex',
  alignItems: 'center',
  width: '85%',
  height: '100%',
  margin: 'auto',
  objectFit: 'contain',
}

const SectionReserve = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [imageView, setImageView] = useState({ url: '', index: 0 })
  const [isOpen, setIsopen] = useState(false)

  const nextImages = () => {
    setStartIndex((index) => {
      return index + imagesPerPage >= images.length ? 0 : index + imagesPerPage
    })
  }

  const prevImages = () => {
    setStartIndex((prevIndex) => {
      return prevIndex - imagesPerPage < 0
        ? images.length - imagesPerPage
        : prevIndex - imagesPerPage
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (imageView.url === '') return

      const index = images.findIndex((img) => img.img === imageView.url)

      if (event.key === 'ArrowRight') {
        if (index + 1 < images.length) {
          setImageView({
            url: images[index + 1].img,
            index: index + 1,
          })
        }
      } else if (event.key === 'ArrowLeft') {
        if (index > 0) setImageView({ url: images[index - 1].img, index: index - 1 })
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [imageView])

  return (
    <section className="reserve">
      <Container>
        <div className="reserve__content">
          {images
            .slice(startIndex, startIndex + imagesPerPage)
            .map((item, i) => (
              <img
                style={{ cursor: 'pointer' }}
                key={`img-${i}`}
                src={item.img}
                alt={item.alt}
                loading="lazy"
                onClick={() => {
                  setIsopen(true)
                  setImageView({ url: item.img, index: i })
                }}
              />
            ))}
        </div>

        <div className="carousel__buttons">
          <button onClick={prevImages}>
            <img
              src={arrowLeft}
              alt="imagem ilustrativa com uma seta para esquerda"
            />
          </button>
          <button onClick={nextImages}>
            <img
              src={arrowRight}
              alt="imagem ilustrativa com uma seta para direita"
            />
          </button>
        </div>

        <a href="https://www.baixioreveillondosquereres.com.br/" target='_blank'>
          <button className="reserve__button">Faça sua reserva</button>
        </a>
      </Container>

      {isOpen && (
        <div style={modal}>
          <span style={close} onClick={() => setIsopen(false)}>
            &times;
          </span>
          <img
            style={modalContent}
            src={imageView.url}
            alt="Imagem da nossa hospedagem"
          />
        </div>
      )}
    </section>
  )
}

export default SectionReserve
