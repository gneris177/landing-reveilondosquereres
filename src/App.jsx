import { useEffect, useState } from 'react'
import Header from './components/Header'
import SectionLineUp from './components/SectionLineUp'
import SectionMeetBaxio from './components/SectionMeetBaxio'
import SectionReserve from './components/SectionReserve'
import SectionMaps from './components/SectionMaps'
import SectionAttractions from './components/SectionAttractions'
import SectionPosts from './components/SectionPosts'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className="main">
      {isLoading ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <>
          <Header />
          <SectionLineUp />
          <SectionMeetBaxio />
          <SectionReserve />
          <SectionMaps />
          <SectionAttractions />
          <SectionPosts />
          <Footer />
        </>
      )}
    </main>
  )
}

export default App
