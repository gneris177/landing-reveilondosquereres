import Container from "../Container";
import "./style.css";
import play from "../../assets/images/PLAY1_foto.png";
import logoIngresse from "../../assets/images/ingresse.png";
import imageGrafismo from "../../assets/images/GRAFISMO.png";
import titleImageBaixio from "../../assets/images/conhecabaixio.png";

const SectionMeetBaxio = () => {
  return (
    <section className="meet-baxio" id="baixio">
      <div className="meet-baxio__content">
        <Container>
          <div style={{ position: "relative" }}>
            <div className="wrapper-ingresse">
              <p className="wrapper-ingresse__text">
                Diferente de tudo que você já viveu! Seja bem-vindo ao Réveillon dos Quereres 2024, que estreia em Baixio. Localizado a pouco mais de uma hora de
                Salvador, próximo à Praia do Forte e à Costa do Sauípe. Com suas águas cristalinas do mar, rio e lagoas, Baixio se torna um verdadeiro refúgio para
                aqueles que são apaixonados pela natureza. O Réveillon promete muitas emoções do dia 28 a 31/12 com atrações incríveis, eventos Open Bar e uma vibe
                única!
              </p>
              <div className="wrapper-ingresse__button">
                <a href="https://reveillonsnobrasil.com.br/reveillon-dos-quereres/" rel="noopener noreferrer" target="_blank"
                >
                  <button className="button">Comprar ingresso</button>
                </a>
                <img src={logoIngresse} className="logo-ingresse" alt="logo da ingresse" />
              </div>
            </div>

            <div className="wrapper-video">
              <h2>
                <img src={titleImageBaixio} />
              </h2>
              <div className="column">
                {/* <img src={play} alt="" /> */}
                <video src="https://res.cloudinary.com/dm9xltw2g/video/upload/f_auto:video,q_auto/v1/landing-quereres/fcvpwbj5wqjukua4qx5w" controls></video>
                <a rel="noopener noreferrer" href="http://www.baixioturismo.com.br/" target="_blank">
                  <button className="button">Saiba mais</button>
                </a>
              </div>
            </div>

            <div className="meet-baixio__backgroung"></div>
          </div>
        </Container>

        <img className="img-grafismo" src={imageGrafismo} alt="imagem ilustrativa" />
      </div>
    </section>
  );
};

export default SectionMeetBaxio;
