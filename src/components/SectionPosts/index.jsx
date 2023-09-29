import Container from '../Container';
import './style.css';
import image1 from '../../assets/images/FOTO-01.png'
import image2 from '../../assets/images/FOTO-02.png'
import image3 from '../../assets/images/FOTO-04.png'


const images = [
  { img: image1, alt: '' },
  { img: image2, alt: '' },
  { img: image1, alt: '' },
  { img: image3, alt: '' },
]

const SectionPosts = () => {
  return (
    <section className="posts">
      <Container>
        <div className='instagram'></div>
        <div className="posts__content">
          {images.map((item, i) => <img key={`img-${i}`} src={item.img} alt={item.alt} />)}
        </div>
      </Container>

      <div className='post__background-image'></div>
    </section>
  );
};

export default SectionPosts;
