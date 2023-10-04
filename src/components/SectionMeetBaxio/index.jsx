import Container from "../Container";
import "./style.css";
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
                <h2 className="title">Diferente de tudo que você já viveu!</h2>
                Seja bem-vindo ao <strong>Réveillon dos Quereres 2024</strong>, 
                que estreia em Baixio. Localizado a pouco mais de uma hora de Salvador, 
                próximo à Praia do Forte e à Costa do Sauípe. Com suas águas cristalinas do mar, 
                rio e lagoas, Baixio se torna um verdadeiro refúgio para aqueles que são 
                apaixonados pela natureza.
                O Réveillon dos Quereres promete muitas emoções do dia <strong>28 a 31/12 </strong> 
                com atrações incríveis. <strong>3 festas Open Bar, Réveillon All Inclusive </strong> 
                e uma vibe única!
              </p>
              <div className="wrapper-ingresse__button">
                <a 
                  href="https://reveillonsnobrasil.com.br/reveillon-dos-quereres/" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <button className="button-custom">Comprar ingresso</button>
                </a>
                <img src={logoIngresse} className="logo-ingresse" alt="logo da ingresse" />
              </div>
            </div>

            <div className="wrapper-video">
              <h2 className="title">
                <img src={titleImageBaixio} />
              </h2>
              <div className="column">
                <video src="https://res.cloudinary.com/dm9xltw2g/video/upload/f_auto:video,q_auto/v1/landing-quereres/fcvpwbj5wqjukua4qx5w" controls></video>
                <div className="wrapper-link">
                  <p className="text">Clique e conheça <br /> mais sobre o Baixio.</p>
                  <a rel="noopener noreferrer" href="http://www.baixioturismo.com.br/" target="_blank">
                    <button className="button-custom">Baixio Turismo</button>
                  </a>
                </div>
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
