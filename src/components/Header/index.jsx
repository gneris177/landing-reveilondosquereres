import Container from '../Container';
import './style.css';
import logo from '../../assets/images/1.png';
import arrowLeft from '../../assets/images/SETA_esquerda.png';
import baixiooBahia from '../../assets/images/BAIXIO-BAHIA.png';

const ButtonMenu = () => (
  <div class="menu-btn">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
);

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__intro">
            <div className="header__text-destination">
              <img src={baixiooBahia} alt="imagem ilustratva representando Baixio - Bahia" />
              <ButtonMenu />
            </div>

          <img className="header__img-main" src={logo} alt="" />
        </div>

        <nav className="header__nav">
          <ButtonMenu />
          <ul>
            <li>Line Up</li>
            <li>Baxio</li>
            <li>Mapa</li>
            <li>Cowntdown</li>
            <li>Programação</li>
            <li>Instagram</li>
            <li>Contato</li>
          </ul>
          <div className="wrapper-arrow">
            <img src={arrowLeft} alt="" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
