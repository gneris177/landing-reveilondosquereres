import { useEffect, useState,  } from 'react'
import logo from '/logo_quereres.png'
import Header from './components/Header'
import SectionLineUp from './components/SectionLineUp'
import SectionMeetBaxio from './components/SectionMeetBaxio'
import SectionReserve from './components/SectionReserve'
import SectionMaps from './components/SectionMaps'
import SectionAttractions from './components/SectionAttractions'
import SectionPosts from './components/SectionPosts'
import Footer from './components/Footer'
import AlertCookie from './components/AlertCookie'
import './App.css'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  const getMargin = () => {
    const container = document.getElementById('container')
    const style = window.getComputedStyle(container)
    const marginLeft = parseInt(style.marginLeft, 10)

    document.querySelector(
      '.header__intro',
    ).style.width = `calc(100% - ${marginLeft}px)`
    if (marginLeft >= 220) {
      document.querySelector('.header__nav').classList.remove('close')
      document.querySelector('#open-menu--mobi').style.display = 'none'
      document.querySelector('#open-menu').style.right = `${marginLeft - 64}px`

      if (marginLeft > 350) {
        document.querySelector('.header__nav').style.marginRight = `${
          marginLeft - 350
        }px`
        document.querySelector('.header__nav').style.width = `350px`
      } else {
        document.querySelector('.header__nav').style.width = `${marginLeft}px`
      }
    } else {
      document.querySelector('.header__nav').classList.add('close')
      document.querySelector('.header__nav').style.display = 'none'
      document.querySelector('#open-menu').style.display = 'none'
    }
  }

  useEffect(() => {
    getMargin()
    window.onresize = getMargin;
    setTimeout(() => setLoaded(true), 1000)
  }, [])

  return (
    <main className="main">
      {!loaded && (
        <div className="container-loading">
          <div className="loading"></div>
            <img src={logo} alt="logo quereres" />
        </div>
      )}
      <Header />
      <SectionLineUp />
      <SectionMeetBaxio />
      <SectionReserve />
      <SectionMaps />
      <SectionAttractions />
      <SectionPosts />
      <Footer />
      <AlertCookie />
    </main>
  )
}

export default App
