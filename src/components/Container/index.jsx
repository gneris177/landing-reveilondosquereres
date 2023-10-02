import { useEffect } from 'react'
import './style.css'

const Container = ({ children }) => {
  const getMargin = () => {
    const container = document.getElementById('container')
    const style = window.getComputedStyle(container)
    const marginLeft = parseInt(style.marginLeft, 10)
    
    document.querySelector('.header__intro').style.width = `calc(100% - ${marginLeft}px)`
    document.querySelector('.attraction__content__list').style.marginLeft = `${marginLeft}px`

    console.log(marginLeft)

    if(marginLeft >= 220) {
      document.querySelector('.header__nav').style.display = `flex`  

      if(marginLeft > 350) {
        document.querySelector('.header__nav').style.marginRight = `${marginLeft-350}px`  
        document.querySelector('.header__nav').style.width = `350px`  
      } else {
        document.querySelector('.header__nav').style.width = `${marginLeft}px`  
      }

      document.querySelector('#open-menu').style.display = 'none'
    } else {
      document.querySelector('.header__nav').style.display = `none`  
      document.querySelector('#open-menu').style.display = 'flex'
    }
  }

  useEffect(() => {
    getMargin()
    window.onresize = getMargin;
  }, [])

  return <div id='container' className="container">{children}</div>
}

export default Container
