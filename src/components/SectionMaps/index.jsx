import Container from '../Container'
import './style.css'

const SectionMaps = () => {
  return (
    <section className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.365031324098!2d-122.08421738536833!3d37.422477426235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc9d4a93e697%3A0x1890b626cbaa9ef5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632850199341!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  )
}

export default SectionMaps
