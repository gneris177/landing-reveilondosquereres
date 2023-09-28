import Container from '../Container'
import './style.css'
import play from '../../assets/images/PLAY1_foto.png'
import logoIngresse from '../../assets/images/ingresse.png'
import imageGrafismo from '../../assets/images/GRAFISMO.png'

const SectionMeetBaxio = () => {
  return (
    <section className="meet-baxio">
      <div className="meet-baxio__content">
        <Container>
          <div style={{ position: 'relative' }}>
          <div className="wrapper-ingresse">
            <p className="wrapper-ingresse__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <div className="wrapper-ingresse__button">
              <button className="button">Comprar ingresso</button>
              <img src={logoIngresse} alt="" />
            </div>
          </div>
    
          <div className="wrapper-video">
            <span className="wrapper-video__title">Conheca Baixo</span> <br />
            <img src={play} alt="" />
          </div>
          <div className='meet-baixio__backgroung'></div>
        </div>
        </Container>
        {/* <img className='img' src={imageGrafismo} alt="" srcset="" /> */}
      </div>
    </section>
  )
}

export default SectionMeetBaxio
