import { useState } from 'react'
import logo from '../../assets/images/1.png';
import arrowLeft from '../../assets/images/SETA_esquerda.png';
import baixiooBahia from '../../assets/images/BAIXIO-BAHIA.png';
import './style.css';


const Header = () => {
  const [customClass, setCustomClass] = useState('');

  const ButtonMenu = ({id}) => (
    <div class={`menu-btn`} id={id}>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  );

  return (
    <>
      <header className="header">
        <div className="header__intro">
            <div className="header__text-destination">
              <img src={baixiooBahia} alt="imagem ilustratva representando Baixio - Bahia" />
              <div onClick={() => setCustomClass('open-mobi')}>
                <ButtonMenu id="open-menu" />
              </div>
            </div>

          <img className="header__img-main" src={logo} alt="" />
        </div>

        <nav class={`header__nav ${customClass}`}>
          <ButtonMenu />
          <ul>
            <li>Line Up</li>
            <li>Baxio</li>
            <li>Mapa</li>
            <li id='current'>Cowntdown</li>
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
