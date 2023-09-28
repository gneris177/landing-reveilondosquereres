import Container from '../Container'
import './style.css'

const SectionLineUp = () => {
  return (
    <section className="line-up">
      <Container>
        <div className="line-up__content">
          <h3 className='line-up__title'>Line Up</h3>
          <p className='line-up__text strong'>GILSONS • MARINA SENA • MOCHAKK • DIOGO NOGUEIRA</p>
          <p className='line-up__text'>
            MAZ • ASHIBAH • FLOW (CUROL B2B SARAH STENZEL) <br />
            PATHY DEJESUS • SANDEVILLE • DRE GUAZZELLI <br />
            LUÍSA VISCARDI • FROM HOUSE TO DISCO
          </p>
        </div>
      </Container>
    </section>
  )
}

export default SectionLineUp
