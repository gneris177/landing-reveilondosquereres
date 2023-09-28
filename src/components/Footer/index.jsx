import logoBaixio from '../../assets/images/baixio.png'
import Container from '../Container';
import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content-main'>
        <Container>
          <div>
            <img src={logoBaixio} alt="" />
            <div><span></span> 71 99966.5493</div>
            <div> reservas@baixioturismo.com.br</div>
            <div>CNPJ: 20.320.184/0001-84</div>
          </div>
        </Container>
        <div className='bg-grafismo'></div>
        <div className='bg-grafismo2'></div>
      </div>
      <footer className='footer__footer'>
        <p>© 2023 Baixio Turismo LTDA. Todos os direitos reservados.</p>
      </footer>
    </footer>
  );
};

export default Footer;
