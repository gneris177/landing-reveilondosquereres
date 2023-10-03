import { useState } from "react";
import Container from "../Container";
import Countdown from "../Countdown";
import attraction1 from "../../assets/images/atracao-1.png";
import grafismoFolha from "../../assets/images/GRAFISMO_folhas.png";
import titleImageCountDown from "../../assets/images/COWNTDOWN.png";
import titleImageProgramaca from "../../assets/images/programacao.png";
import "./style.css";

const SectionAttractions = () => {
  const listAttractions = [
    { day: "Quinta", data: "28 Dez", year: 2023, img: attraction1 },
    { day: "Sexta", data: "29 Dez", year: 2023, img: attraction1 },
    { day: "Sábado", data: "30 Dez", year: 2023, img: attraction1 },
    { day: "Domingo", data: "31 Dez", year: 2023, img: attraction1 },
  ];
  const [currentAttraction, setCurrentAttraction] = useState(1);

  return (
    <section className="attraction">
      <img src={grafismoFolha} className="attraction__grafismo-folha" />
      <div className="attraction__line-vertical"></div>

      <Container>
        <div className="attraction__wrapper-countdown">
          <h2><img src={titleImageCountDown} /></h2>
          <br />
          <Countdown />
        </div>
      </Container>

      {/* <div className="wrapper__attraction__content" id="attractions" >
        <Container>
          <h2><img src={titleImageProgramaca} /></h2>
          <br />
        </Container>

        <div className="attraction__content">
          <ul className="attraction__content__list">
            {listAttractions.map((a, i) => (
              <li key={i} id={i === currentAttraction ? "current" : ""} onClick={() => setCurrentAttraction(i)}>
                <div className="day">{a.day}</div>
                <div className="data">
                  <div>{a.data}.</div> <div className="year">{a.year}</div>
                </div>
              </li>
            ))}
          </ul>
          <img className="attraction__image" src={attraction1} alt="" />
        </div>
      </div> */}
    </section>
  );
};

export default SectionAttractions;
