import Container from '../Container'
import image1 from '../../assets/images/instagram/01.png'
import image2 from '../../assets/images/instagram/02.png'
import image3 from '../../assets/images/instagram/03.png'
import image4 from '../../assets/images/instagram/04.png'
import arrowLeft from '../../assets/images/SETA_esquerda.png'
import arrowRight from '../../assets/images/SETA_direita.png'
import grafismo from '../../assets/images/GRAFISMO_ondas.png'
import './style.css'

const images = [
  { img: image1, alt: 'Post instagram' },
  { img: image2, alt: 'Post instagram' },
  { img: image3, alt: 'Post instagram' },
  { img: image4, alt: 'Post instagram' },
]

const SectionPosts = () => {
  return (
    <section id="posts" className="posts">
      <Container>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/reveillondosquereres/?hl=en"
          target="_blank"
          className="instagram"
        ></a>

        <div className="wrapper-arrow-right">
          <img className="arrow-right" src={arrowRight} alt="" />
        </div>

        <div className="wrapper-arrow-left">
            <img className="arrow-left" src={arrowLeft} alt="" />
        </div>

        <div className="posts__content">
          {images.map((item, i) => (
            <img key={`img-${i}`} src={item.img} alt={item.alt} />
          ))}
        </div>

        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/reveillondosquereres/?hl=en"
          target="_blank"
          className="instagram-quereres"
        ></a>
      </Container>
      <img src={grafismo} className="post__background-image" />
    </section>
  )
}

export default SectionPosts
