import './style.css';
import Container from '../Container';
import logoBaixio from '../../assets/images/baixio.png';
import logoQuereres from '../../assets/images/logo_quereres.png';
import grafismoCoqueiro from '../../assets/images/GRAFISMO_coqueiros.png';
import grafismoEspiral from '../../assets/images/GRAFISMO_espiral.png';
import piraLogo from '../../assets/images/PIRA.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content-main'>
        <img className='grafismo-espiral' src={grafismoEspiral} alt="" />
        <Container>
          <div className='info'>
            <div>
              <img className='info__logo' src={logoBaixio} alt="logomarca da empresa Baixio" />
              <div className='info__text'>
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/> 
                71 99966.5493
              </div>
              <div className='info__text'> 
                <img width="20" height="20" src="https://img.icons8.com/metro/50/filled-message.png" alt="filled-message"/>
                reservas@baixioturismo.com.br
              </div>
              <div className='info__text'>
                <span className='cnpj'>CNPJ:</span> 20.320.184/0001-84
              </div>
              <div className='info__text'>
                <a rel="noopener noreferrer" href="https://www.instagram.com/reveillondosquereres/?hl=en" target="_blank">
                  <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                </a>
                <a  rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5571999665493&text=Ol%C3%A1!%20Eu%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Baixio%20Turismo" target="_blank">
                  <img width="22" height="22" src="https://img.icons8.com/ios-glyphs/30/whatsapp.png" alt="whatsapp"/>
                </a>
              </div>
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
            <p>© 2023 <strong>Baixio Turismo LTDA</strong>. Todos os direitos reservados.</p>
            <img className='logo-pira' src={piraLogo} alt='logomarca da agência Pira' />
          </div>
        </Container>
      </footer>
    </footer>
  );
};

export default Footer;
