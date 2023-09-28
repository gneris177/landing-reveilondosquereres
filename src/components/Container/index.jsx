import { useEffect } from 'react'
import './style.css'

const Container = ({ children }) => {
  const getMargin = () => {
    const container = document.getElementById('container')
    const style = window.getComputedStyle(container)
    const marginLeft = parseInt(style.marginLeft, 10)
    
    document.querySelector('.header__intro').style.width = `calc(100% - ${marginLeft}px)`
    document.querySelector('.attraction__content__list').style.marginLeft = `${marginLeft}px`

    if(marginLeft >= 150) {
      document.querySelector('.header__nav').style.width = `${marginLeft}px`  
    } else {
      document.querySelector('.header__nav').style.display = `none`  
    }
  }

  useEffect(() => {
    getMargin()
    window.onresize = getMargin;
  }, [])

  return <div id='container' className="container">{children}</div>
}

export default Container
