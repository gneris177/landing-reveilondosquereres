import Container from '../Container';
import './style.css';
import image1 from '../../assets/images/FOTO-01.png'
import image2 from '../../assets/images/FOTO-02.png'
import image3 from '../../assets/images/FOTO-04.png'
import arrowLeft from '../../assets/images/SETA_esquerda.png'
import arrowRight from '../../assets/images/SETA_direita.png'

const images = [
  { img: image1, alt: '' },
  { img: image2, alt: '' },
  { img: image1, alt: '' },
  { img: image3, alt: '' },
]

const SectionPosts = () => {
  return (
    <section className="posts">
      <img src={arrowLeft} alt="" />
      <Container>
        <a  rel="noopener noreferrer" href='https://www.instagram.com/reveillondosquereres/?hl=en' target='_blank' className='instagram'></a>
        <div className="posts__content">
          {images.map((item, i) => <img key={`img-${i}`} src={item.img} alt={item.alt} />)}
        </div>
      </Container>
      <div className='post__background-image'></div>
      <img src={arrowRight} alt="" />
    </section>
  );
};

export default SectionPosts;
