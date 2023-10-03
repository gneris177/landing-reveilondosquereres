import logo from '../../assets/images/1-min.webp';
import arrowLeft from '../../assets/images/SETA_esquerda.png';
import baixiooBahia from '../../assets/images/BAIXIO-BAHIA.png';
import './style.css';
import Container from '../Container';

const Header = () => {
  const ButtonMenu = ({ id }) => (
    <div className={`menu-btn`} id={id}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );

  const toSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const closedMenu = () => {
    document.querySelector('.header__nav').classList.add('close');
  };

  const openMenuMobi = () => {
    document.querySelector('.header__nav--mobi').classList.remove('close');
  };

  const openMenu = () => {
    document.querySelector('.header__nav').classList.remove('close');
  };

  const closedMenuMobi = () => {
    document.querySelector('.header__nav--mobi').classList.add('close');
  };

  return (
    <>
      <header className="header">
        <div className="header__intro">
          <div className="header__text-destination">
            <img
              src={baixiooBahia}
              alt="imagem ilustratva representando Baixio - Bahia"
            />
            <div onClick={openMenuMobi}>
              <ButtonMenu id="open-menu--mobi" />
            </div>
          </div>
          <img className="header__img-main" src={logo} alt="" />
        </div>

        <div id="open-menu" onClick={openMenu}>
          <ButtonMenu />
        </div>

        <nav className={`header__nav close`}>
          <div onClick={closedMenu}>
            <ButtonMenu id="close-menu" />
          </div>
          <ul>
            <li onClick={() => toSection('line-up')}>Line Up</li>
            <li onClick={() => toSection('baixio')}>Baixio</li>
            <li onClick={() => toSection('map')}>Mapa</li>
            <li onClick={() => toSection('cowntdown')}>Cowntdown</li>
            {/* <li onClick={() => toSection('attractions')}>Programação</li> */}
            <li onClick={() => toSection('posts')}>Instagram</li>
            <li onClick={() => toSection('contact')}>Contato</li>
          </ul>
          <div className="wrapper-arrow">
            <img src={arrowLeft} alt="imagem seta para esquerda" />
          </div>
        </nav>

        <nav className={`header__nav--mobi close`}>
          <div onClick={closedMenuMobi}>
            <ButtonMenu id="close-menu--mobi" />
          </div>
          <ul>
            <li onClick={() => toSection('line-up')}>Line Up</li>
            <li onClick={() => toSection('baixio')}>Baixio</li>
            <li onClick={() => toSection('map')}>Mapa</li>
            <li onClick={() => toSection('cowntdown')}>Cowntdown</li>
            {/* <li onClick={() => toSection('attractions')}>Programação</li> */}
            <li onClick={() => toSection('posts')}>Instagram</li>
            <li onClick={() => toSection('contact')}>Contato</li>
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
