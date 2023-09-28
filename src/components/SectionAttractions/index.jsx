import { useState } from 'react'
import Container from '../Container'
import Countdown from '../Countdown'
import attraction1 from '../../assets/images/atracao-1.png'
import './style.css'

const SectionAttractions = () => {
  const listAttractions = [
    { day: 'Quinta', data: '28 Dez', year: 2023, img: attraction1 },
    { day: 'Sexta', data: '29 Dez', year: 2023, img: attraction1 },
    { day: 'Sábado', data: '30 Dez', year: 2023, img: attraction1 },
    { day: 'Domingo', data: '31 Dez', year: 2023, img: attraction1 },
  ]
  const [currentAttraction, setCurrentAttraction] = useState(1)

  return (
    <section id="attraction" className="attraction">
      <div className="attraction__line-vertical"></div>

      <Container>
        <div className="attraction__wrapper-countdown">
          <Countdown />
        </div>
      </Container>

      <div className="attraction__content">
        <ul className="attraction__content__list">
          {listAttractions.map((a, i) => (
            <li
              key={i}
              id={i === currentAttraction ? 'current' : ''}
              onClick={() => setCurrentAttraction(i)}
            >
              <div className="day">{a.day}</div>
              <div className="data">
                {a.data}. <span className="year">{a.year}</span>
              </div>
            </li>
          ))}
        </ul>
        <img className="attraction__image" src={attraction1} alt="" srcset="" />
      </div>
    </section>
  )
}

export default SectionAttractions
