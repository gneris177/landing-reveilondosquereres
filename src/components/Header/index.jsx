import { useState } from 'react'
import logo from '../../assets/images/1-min.webp'
import arrowLeft from '../../assets/images/SETA_esquerda.png'
import baixiooBahia from '../../assets/images/BAIXIO-BAHIA.png'
import './style.css'
import Container from '../Container'

const Header = () => {
  const [customClass, setCustomClass] = useState('')

  const ButtonMenu = ({ id }) => (
    <div className={`menu-btn`} id={id}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  )

  const toSection = (id) => {
    const elem = document.getElementById(id)
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="header">
        <div className="header__intro">
          <div className="header__text-destination">
            <img
              src={baixiooBahia}
              alt="imagem ilustratva representando Baixio - Bahia"
            />
            
            <div onClick={() => setCustomClass('open-mobi')}>
              <ButtonMenu id="open-menu" />
            </div>
          </div>
          <img className="header__img-main" src={logo} alt="" />
        </div>

        <nav className={`header__nav ${customClass}`}>
          <div onClick={() => setCustomClass('close')}>
            <ButtonMenu id="close-menu" />
          </div>
          <ul>
            <li onClick={() => toSection('line-up')}>Line Up</li>
            <li onClick={() => toSection('baixio')}>Baixio</li>
            <li onClick={() => toSection('map')}>Mapa</li>
            <li onClick={() => toSection('cowntdown')}>Cowntdown</li>
            <li onClick={() => toSection('attractions')}>Programação</li>
            <li onClick={() => toSection('posts')}>Instagram</li>
            <li onClick={() => toSection('contact')}>Contato</li>
          </ul>
          <div className="wrapper-arrow">
            <img src={arrowLeft} alt="" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
