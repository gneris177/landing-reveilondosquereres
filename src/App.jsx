import Header from './components/Header';
import SectionLineUp from './components/SectionLineUp';
import SectionMeetBaxio from './components/SectionMeetBaxio';
import SectionReserve from './components/SectionReserve';
import SectionMaps from './components/SectionMaps';
import SectionAttractions from './components/SectionAttractions';
import SectionPosts from './components/SectionPosts';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <main className='main'>
      <Header />
      <SectionLineUp />
      <SectionMeetBaxio />
      <SectionReserve />
      <SectionMaps />
      <SectionAttractions />
      <SectionPosts />
      <Footer />
    </main>
  )
}

export default App
