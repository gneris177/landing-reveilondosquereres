import Container from '../Container';
import './style.css';
import image1 from '../../assets/images/FOTO-01.png'
import image2 from '../../assets/images/FOTO-03_.png'
import image3 from '../../assets/images/FOTO-04_.png'
import image4 from '../../assets/images/FOTO-011_.png'
import image5 from '../../assets/images/FOTO-05_.png'

const images = [
  { img: image4, alt: '' },
  { img: image1, alt: '' },
  { img: image2, alt: '' },
  { img: image3, alt: '' },
  { img: image5, alt: '' }
]

const SectionPosts = () => {
  return (
    <section className="post">
      <Container>
        

        {/* <div className="reserve__content">
          {images.map((item, i) => <img key={`img-${i}`} src={item.img} alt={item.alt} />)}
        </div>
        <button className='reserve__button'>Faça sua reserva</button> */}
      </Container>
    </section>
  );
};

export default SectionPosts;
