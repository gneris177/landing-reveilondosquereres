import './style.css';
import Container from '../Container';
import logoBaixio from '../../assets/images/baixio.png';
import logoQuereres from '../../assets/images/logo_quereres.png';
import grafismoCoqueiro from '../../assets/images/GRAFISMO_coqueiros.png';
import grafismoEspiral from '../../assets/images/GRAFISMO_espiral.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content-main'>
        <img className='grafismo-espiral' src={grafismoEspiral} alt="" />
        <Container>
          <div className='info'>
            <div>
              <img className='info__logo' src={logoBaixio} alt="logomarca da empresa Baixio" />
              <div className='info__text'><span></span> 71 99966.5493</div>
              <div className='info__text'> reservas@baixioturismo.com.br</div>
              <div className='info__text'>CNPJ: 20.320.184/0001-84</div>
            </div>
            <div className='wrapper-logo-quereres'>
              <img src={logoQuereres} alt="logomarca da empresa quereres" />
            </div>
          </div>
        </Container>
        <img className='grafismo-coqueiro' src={grafismoCoqueiro} alt="" />
      </div>

      <footer className='footer__footer'>
        <Container>
          <div className='footer__footer__content'>
            <p>© 2023 Baixio Turismo LTDA. Todos os direitos reservados.</p>
          </div>
        </Container>
      </footer>
    </footer>
  );
};

export default Footer;
