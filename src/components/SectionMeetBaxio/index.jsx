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
            Diferente de tudo que você já viveu!
            Seja bem-vindo ao Réveillon dos Quereres 2024, que estreia em Baixio. Localizado a pouco mais de uma hora de Salvador, próximo à Praia do Forte e à Costa do Sauípe. Com suas águas cristalinas do mar, rio e lagoas, Baixio se torna um verdadeiro refúgio para aqueles que são apaixonados pela natureza.
            O Réveillon promete muitas emoções do dia 28 a 31/12 com atrações incríveis, eventos Open Bar e uma vibe única!
            </p>
            <div className="wrapper-ingresse__button">
              <button className="button">Comprar ingresso</button>
              <img src={logoIngresse} className='logo-ingresse' alt="logo da ingresse" />
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
