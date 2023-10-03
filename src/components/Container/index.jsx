import { useEffect } from 'react'
import './style.css'

const Container = ({ children }) => {
  const getMargin = () => {
    const container = document.getElementById('container')
    const style = window.getComputedStyle(container)
    const marginLeft = parseInt(style.marginLeft, 10)
    
    document.querySelector('.header__intro').style.width = `calc(100% - ${marginLeft}px)`
    // document.querySelector('.attraction__content__list').style.marginLeft = `${marginLeft}px`

    if(marginLeft >= 220) {
      document.querySelector('.header__nav').classList.remove('close');
      document.querySelector('#open-menu--mobi').style.display = 'none';
      document.querySelector('#open-menu').style.right = `${marginLeft - 64}px`;
      document.querySelector('.attraction__line-vertical').style.marginLeft = `${marginLeft/2}px`

      if(marginLeft > 350) {
        document.querySelector('.header__nav').style.marginRight = `${marginLeft-350}px`  
        document.querySelector('.header__nav').style.width = `350px`  
      } else {
        document.querySelector('.header__nav').style.width = `${marginLeft}px`  
      }
    } else {
      document.querySelector('.header__nav').classList.add('close');
      document.querySelector('.header__nav').style.display = 'none';
      document.querySelector('#open-menu').style.display = 'none';
    }
  }

  useEffect(() => {
    getMargin()
    window.onresize = getMargin;
  }, [])

  return <div id='container' className="container">{children}</div>
}

export default Container
