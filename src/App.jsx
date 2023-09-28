import Header from './components/Header';
import './App.css'
import SectionLineUp from './components/SectionLineUp';
import SectionMeetBaxio from './components/SectionMeetBaxio';
import SectionReserve from './components/SectionReserve';
import SectionMaps from './components/SectionMaps';
import SectionAttractions from './components/SectionAttractions';
import SectionPosts from './components/SectionPosts';
import Footer from './components/Footer';

function App() {

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
